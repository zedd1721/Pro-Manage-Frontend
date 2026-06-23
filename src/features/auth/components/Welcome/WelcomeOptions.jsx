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
  const isCreate = id === "create";
  const badges = isCreate
    ? ["Name it", "Describe it", "Invite later"]
    : ["Use code", "Join team", "Start working"];
  const badgeLabel = isCreate ? "New Workspace" : "Quick Access";
  const cardTitle = isCreate ? "Create Project" : "Join Project";
  const cardDescription = isCreate
    ? "Start a fresh workspace, name it clearly, and add context before inviting your team."
    : "Use an invite code to enter an existing workspace and start collaborating right away.";

  return (
    <article
      className={`mx-auto flex w-full max-w-[20.75rem] cursor-pointer flex-col rounded-[1.7rem] border px-6 py-7 text-left shadow-[0_14px_35px_rgba(38,72,119,0.08)] transition-transform duration-200 hover:scale-[1.02] ${
        isCreate
          ? "bg-[linear-gradient(160deg,#f7fbff_0%,#eef5ff_52%,#fdfefe_100%)]"
          : "bg-[linear-gradient(160deg,#f4fffe_0%,#ebfbfb_55%,#ffffff_100%)]"
      }`}
      style={{ borderColor: PANEL_BORDER }}
      onClick={() => onSelect(id)}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className="flex size-[4rem] items-center justify-center rounded-[1.25rem] shadow-sm"
          style={{ background: iconBackground }}
          aria-hidden="true"
        >
          <Icon className="size-[1.65rem] stroke-[1.9]" style={{ color: accent }} />
        </div>
        <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-500 shadow-sm">
          {badgeLabel}
        </span>
      </div>

      <h2
        className="mt-6 text-[1.7rem] font-semibold tracking-[-0.05em]"
        style={{ color: accent }}
      >
        {cardTitle}
      </h2>

      <p className="mt-3 max-w-[14.8rem] text-[0.96rem] leading-6 text-slate-600">
        {cardDescription}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {badges.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-slate-500 shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function WelcomeModal({ mode, onClose }) {
  const isCreate = mode === "create";
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const title = isCreate ? "Create Project" : "Join Project";
  const label = isCreate ? "Project Name" : "Enter Code";
  const placeholder = isCreate ? "Enter project name" : "Enter invite code";
  const helperText = isCreate
    ? "Give your project a clear name and a short description. You can refine both later."
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

        {isCreate ? (
          <label className="mt-5 block">
            <span className="text-[1rem] font-semibold text-slate-800">
              Project Description
            </span>
            <textarea
              rows={4}
              placeholder="Briefly describe what this project is about..."
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="mt-3 w-full resize-none rounded-[0.85rem] border px-4 py-3 text-[0.98rem] text-slate-800 outline-none transition focus:border-slate-300"
              style={{ borderColor: "#e2e8f0" }}
            />
          </label>
        ) : null}

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
        className="mx-auto flex min-h-full w-full max-w-[68rem] items-center justify-center rounded-[2rem] px-6 py-10 shadow-[0_24px_60px_rgba(46,86,140,0.12)] sm:px-8 lg:px-12 lg:py-12"
        style={{ backgroundColor: PANEL_BACKGROUND }}
      >
        <div className="w-full max-w-[43rem]">
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

          <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-2">
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
