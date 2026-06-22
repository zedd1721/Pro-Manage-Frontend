import { useState } from "react";
import {
  BriefcaseBusiness,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

function SettingsHeader() {
  return (
    <header className="-mx-6 -mt-6 border-b border-gray-100 bg-white px-6 py-4 md:-mx-8 md:-mt-8 md:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-[18px] font-bold tracking-tight text-slate-900">
            Settings
          </h1>
          <p className="mt-0.5 text-[12px] text-slate-400">
            Manage your account details, password, and project information.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-center">
            <div className="text-[15px] font-bold text-sky-600">Personal</div>
            <div className="text-[10px] font-medium text-slate-400">Profile</div>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-center">
            <div className="text-[15px] font-bold text-emerald-600">Secure</div>
            <div className="text-[10px] font-medium text-slate-400">Password</div>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-center">
            <div className="text-[15px] font-bold text-violet-600">Project</div>
            <div className="text-[10px] font-medium text-slate-400">Workspace</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function CardTitle({ icon: Icon, eyebrow, title, description, tone }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl ${tone}`}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          {eyebrow}
        </p>
        <h2 className="mt-1.5 text-[17px] font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        <p className="mt-1 text-[13px] leading-6 text-slate-500">{description}</p>
      </div>
    </div>
  );
}

function Field({ label, icon: Icon, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
        {label}
      </span>
      <div className="relative">
        {Icon ? (
          <Icon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" />
        ) : null}
        {children}
      </div>
    </label>
  );
}

function inputClass(withIcon = false) {
  return `w-full rounded-xl border border-slate-200 bg-white ${
    withIcon ? "pl-10 pr-4" : "px-4"
  } py-2.5 text-[13.5px] text-slate-800 transition-all focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-50`;
}

function SettingsPage() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "Kumar Rao",
    email: "kumar@promanage.app",
    role: "Product Designer",
  });
  const [passwordDetails, setPasswordDetails] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [projectDetails, setProjectDetails] = useState({
    projectName: "ProjectFlow",
    projectType: "Web Application",
    projectDescription:
      "Project management workspace for planning, tracking, and collaboration.",
  });

  const profileInitials = personalDetails.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex min-h-full flex-col">
      <SettingsHeader />

      <div className="flex flex-1 flex-col gap-6 py-6">
        <section className="grid gap-6 xl:grid-cols-[320px_1fr]">
          <article className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-br from-sky-500 via-sky-400 to-cyan-300 px-6 py-6 text-white">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-[22px] font-bold backdrop-blur-sm">
                {profileInitials}
              </div>
              <h2 className="mt-5 text-[20px] font-semibold tracking-tight">
                {personalDetails.name}
              </h2>
              <p className="mt-1 text-sm text-white/85">{personalDetails.role}</p>
            </div>

            <div className="space-y-4 px-6 py-5">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Email Address
                </p>
                <p className="mt-1.5 break-all text-[13px] font-medium text-slate-700">
                  {personalDetails.email}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <p className="text-[13px] font-semibold text-slate-800">
                    Account protected
                  </p>
                </div>
                <p className="mt-1.5 text-[12px] leading-5 text-slate-500">
                  Keep your details up to date and rotate your password regularly.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white px-4 py-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-violet-500" />
                  <p className="text-[13px] font-semibold text-slate-800">
                    Profile visibility
                  </p>
                </div>
                <p className="mt-1.5 text-[12px] leading-5 text-slate-500">
                  Your name and role appear across boards, analytics, and team spaces.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <CardTitle
              icon={UserRound}
              eyebrow="Account"
              title="Personal Details"
              description="Update the information your teammates see in your workspace."
              tone="bg-sky-100 text-sky-700"
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" icon={UserRound}>
                <input
                  type="text"
                  value={personalDetails.name}
                  onChange={(event) =>
                    setPersonalDetails((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  className={inputClass(true)}
                />
              </Field>

              <Field label="Email" icon={Mail}>
                <input
                  type="email"
                  value={personalDetails.email}
                  onChange={(event) =>
                    setPersonalDetails((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  className={inputClass(true)}
                />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Role">
                  <input
                    type="text"
                    value={personalDetails.role}
                    onChange={(event) =>
                      setPersonalDetails((current) => ({
                        ...current,
                        role: event.target.value,
                      }))
                    }
                    className={inputClass()}
                  />
                </Field>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-6">
              <CardTitle
                icon={LockKeyhole}
                eyebrow="Security"
                title="Update Password"
                description="Use a stronger password if you’ve shared access or signed in on a new device."
                tone="bg-emerald-100 text-emerald-700"
              />

              <div className="mt-6 grid gap-4">
                <Field label="Current Password" icon={LockKeyhole}>
                  <input
                    type="password"
                    value={passwordDetails.currentPassword}
                    onChange={(event) =>
                      setPasswordDetails((current) => ({
                        ...current,
                        currentPassword: event.target.value,
                      }))
                    }
                    className={inputClass(true)}
                  />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="New Password" icon={LockKeyhole}>
                    <input
                      type="password"
                      value={passwordDetails.newPassword}
                      onChange={(event) =>
                        setPasswordDetails((current) => ({
                          ...current,
                          newPassword: event.target.value,
                        }))
                      }
                      className={inputClass(true)}
                    />
                  </Field>

                  <Field label="Confirm Password" icon={LockKeyhole}>
                    <input
                      type="password"
                      value={passwordDetails.confirmPassword}
                      onChange={(event) =>
                        setPasswordDetails((current) => ({
                          ...current,
                          confirmPassword: event.target.value,
                        }))
                      }
                      className={inputClass(true)}
                    />
                  </Field>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-600 transition-colors hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-xl bg-sky-500 px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-sky-600"
              >
                Save Account Changes
              </button>
            </div>
          </article>
        </section>

        <section className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <CardTitle
            icon={BriefcaseBusiness}
            eyebrow="Workspace"
            title="Project Details"
            description="Maintain the key information that defines this project space."
            tone="bg-violet-100 text-violet-700"
          />

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Field label="Project Name" icon={BriefcaseBusiness}>
              <input
                type="text"
                value={projectDetails.projectName}
                onChange={(event) =>
                  setProjectDetails((current) => ({
                    ...current,
                    projectName: event.target.value,
                  }))
                }
                className={inputClass(true)}
              />
            </Field>

            <Field label="Project Type">
              <input
                type="text"
                value={projectDetails.projectType}
                onChange={(event) =>
                  setProjectDetails((current) => ({
                    ...current,
                    projectType: event.target.value,
                  }))
                }
                className={inputClass()}
              />
            </Field>

            <div className="lg:col-span-2">
              <Field label="Project Description">
                <textarea
                  rows={4}
                  value={projectDetails.projectDescription}
                  onChange={(event) =>
                    setProjectDetails((current) => ({
                      ...current,
                      projectDescription: event.target.value,
                    }))
                  }
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-[13.5px] text-slate-800 transition-all focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-50"
                />
              </Field>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-end gap-3">
            <button
              type="button"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-600 transition-colors hover:bg-slate-50"
            >
              Reset
            </button>
            <button
              type="button"
              className="rounded-xl bg-violet-500 px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-violet-600"
            >
              Update Project
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SettingsPage;
