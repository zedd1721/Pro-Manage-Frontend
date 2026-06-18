import { useState } from "react";
import { Plus, UsersRound, X } from "lucide-react";

const PAGE_BACKGROUND = "#e6effc";
const PANEL_BACKGROUND = "#ffffff";
const PANEL_BORDER = "#e2e8f0";
const TITLE_COLOR = "#1f3357";
const SUBTITLE_COLOR = "#5f6f8d";

const options = [
  {
    id: "create",
    title: "Create",
    description: "Create a new project.",
    accent: "#4a78c9",
    iconBackground: "linear-gradient(180deg, #eef4ff 0%, #e4edfb 100%)",
    Icon: Plus,
  },
  {
    id: "join",
    title: "Join",
    description: "Join an existing project using an invite code.",
    accent: "#0d8e9f",
    iconBackground: "linear-gradient(180deg, #e5f7f7 0%, #d7f0ef 100%)",
    Icon: UsersRound,
  },
];

function WelcomeCard({
  id,
  title,
  description,
  accent,
  iconBackground,
  Icon,
  onSelect,
}) {
  return (
    <article
      className="mx-auto flex aspect-square w-full max-w-[21.5rem] cursor-pointer flex-col items-center justify-center rounded-[1.65rem] border bg-white px-7 py-8 text-center shadow-[0_14px_35px_rgba(38,72,119,0.08)] transition-transform duration-200 hover:scale-[1.02]"
      style={{ borderColor: PANEL_BORDER }}
      onClick={() => onSelect(id)}
    >
      <div
        className="flex size-[5.8rem] items-center justify-center rounded-full"
        style={{ background: iconBackground }}
        aria-hidden="true"
      >
        <Icon className="size-9 stroke-[1.8]" style={{ color: accent }} />
      </div>

      <h2 className="mt-5 text-[1.7rem] font-semibold tracking-[-0.04em]" style={{ color: accent }}>
        {title}
      </h2>

      <p className="mt-3 max-w-[14.5rem] text-[1rem] leading-7 text-slate-600">
        {description}
      </p>
    </article>
  );
}

function WelcomeModal({ mode, onClose }) {
  const isCreate = mode === "create";
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const title = isCreate ? "Create Project" : "Join Project";
  const label = isCreate ? "Project Name" : "Enter Code";
  const placeholder = isCreate ? "Enter project name" : "Enter invite code";
  const helperText = isCreate
    ? "Give your project a name. You can change it later."
    : "Enter the invite code to join an existing project.";
  const buttonText = isCreate ? "Create" : "Join";
  const buttonBackground = isCreate
    ? "linear-gradient(135deg, #567fcf 0%, #6a91db 100%)"
    : "linear-gradient(135deg, #0c94a5 0%, #1497a1 100%)";

  function handleSubmit() {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      setError(
        isCreate
          ? "Please enter a project name."
          : "Please enter an invite code."
      );
      return;
    }

    setError("");
  }

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-slate-900/15 px-4 backdrop-blur-[2px]">
      <div className="w-full max-w-[24rem] rounded-[1.25rem] border border-slate-200 bg-white p-8 shadow-[0_22px_60px_rgba(15,23,42,0.18)]">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-[2rem] font-semibold tracking-[-0.05em] text-[color:var(--welcome-title)]">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close modal"
          >
            <X className="size-6 stroke-[2]" />
          </button>
        </div>

        <label className="mt-7 block">
          <span className="text-[1rem] font-semibold text-slate-800">{label}</span>
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              if (error) {
                setError("");
              }
            }}
            className="mt-3 w-full rounded-[0.85rem] border px-4 py-3 text-[0.98rem] text-slate-800 outline-none transition focus:border-slate-300"
            style={{ borderColor: error ? "#ef4444" : "#e2e8f0" }}
          />
        </label>

        {error ? (
          <p className="mt-2 text-[0.88rem] font-medium text-red-500">{error}</p>
        ) : null}

        <p className="mt-4 text-[0.92rem] leading-7 text-slate-500">{helperText}</p>

        <button
          type="button"
          onClick={handleSubmit}
          className="mt-7 w-full cursor-pointer rounded-[0.9rem] px-6 py-3.5 text-[1rem] font-semibold text-white shadow-[0_12px_25px_rgba(58,98,170,0.16)]"
          style={{ background: buttonBackground }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

function WelcomeOptions() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section
      className="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-12"
      style={{
        backgroundColor: PAGE_BACKGROUND,
        "--welcome-title": TITLE_COLOR,
      }}
    >
      <div
        className="mx-auto flex min-h-full w-full max-w-[76.5rem] items-center justify-center rounded-[2rem] px-6 py-12 shadow-[0_24px_60px_rgba(46,86,140,0.12)] sm:px-10 lg:px-16 lg:py-16"
        style={{ backgroundColor: PANEL_BACKGROUND }}
      >
        <div className="w-full max-w-[50rem]">
          <header className="text-center">
            <h1
              className="text-[clamp(1.85rem,3.3vw,2.95rem)] font-semibold tracking-[-0.05em]"
              style={{ color: TITLE_COLOR }}
            >
              What would you like to do?
            </h1>
            <p
              className="mt-3 text-[clamp(0.95rem,1.25vw,1.05rem)] font-normal"
              style={{ color: SUBTITLE_COLOR }}
            >
              Choose an option below to get started
            </p>
          </header>

          <div className="mt-10 grid gap-7 lg:mt-12 lg:grid-cols-2">
            {options.map((option) => (
              <WelcomeCard
                key={option.id}
                {...option}
                onSelect={setActiveModal}
              />
            ))}
          </div>
        </div>
      </div>

      {activeModal ? (
        <WelcomeModal mode={activeModal} onClose={() => setActiveModal(null)} />
      ) : null}
    </section>
  );
}

export default WelcomeOptions;
