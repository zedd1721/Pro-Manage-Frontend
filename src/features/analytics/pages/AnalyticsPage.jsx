import {
  AlertTriangle,
  CheckCircle2,
  CircleDashed,
  Clock3,
  KanbanSquare,
  Layers3,
  ListTodo,
} from "lucide-react";

const projectAnalytics = [
  {
    label: "Total Tasks",
    value: 48,
    icon: Layers3,
    tone: "bg-slate-100 text-slate-700",
  },
  {
    label: "Backlog Tasks",
    value: 8,
    icon: CircleDashed,
    tone: "bg-violet-100 text-violet-700",
  },
  {
    label: "To Do Tasks",
    value: 14,
    icon: ListTodo,
    tone: "bg-sky-100 text-sky-700",
  },
  {
    label: "In Progress Tasks",
    value: 11,
    icon: Clock3,
    tone: "bg-amber-100 text-amber-700",
  },
  {
    label: "Done Tasks",
    value: 15,
    icon: CheckCircle2,
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Overdue Tasks",
    value: 5,
    icon: AlertTriangle,
    tone: "bg-rose-100 text-rose-700",
  },
];

const membersAnalytics = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Frontend Developer",
    assignedTasks: 12,
    pendingTasks: 4,
    inProgressTasks: 3,
    completedTasks: 5,
    backlogTasks: 0,
    accent: "from-sky-500 to-blue-600",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Backend Developer",
    assignedTasks: 15,
    pendingTasks: 5,
    inProgressTasks: 4,
    completedTasks: 4,
    backlogTasks: 2,
    accent: "from-violet-500 to-purple-600",
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "UI/UX Designer",
    assignedTasks: 9,
    pendingTasks: 2,
    inProgressTasks: 2,
    completedTasks: 5,
    backlogTasks: 0,
    accent: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "QA Engineer",
    assignedTasks: 12,
    pendingTasks: 3,
    inProgressTasks: 2,
    completedTasks: 6,
    backlogTasks: 1,
    accent: "from-emerald-500 to-teal-600",
  },
];

const memberStatConfig = [
  { key: "assignedTasks", label: "Assigned" },
  { key: "pendingTasks", label: "Pending" },
  { key: "inProgressTasks", label: "In Progress" },
  { key: "completedTasks", label: "Completed" },
  { key: "backlogTasks", label: "Backlog" },
];

function ProjectOverviewCard() {
  return (
    <section className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Overview
          </p>
          <h2 className="mt-2 text-[1.25rem] font-semibold tracking-tight text-slate-900">
            Project Overview
          </h2>
        </div>
        <div className="hidden rounded-xl bg-slate-50 px-3 py-2 text-right sm:block">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Current Project
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-700">ProjectFlow</p>
        </div>
      </div>

      <div className="mt-4 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-6">
        {projectAnalytics.map(({ label, value, icon: Icon, tone }) => (
          <article
            key={label}
            className="rounded-xl border border-slate-100 bg-slate-50/70 p-3 transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-3">
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${tone}`}>
                <Icon className="h-4 w-4" />
              </div>
              <KanbanSquare className="h-4 w-4 text-slate-300" />
            </div>
            <p className="mt-3 text-[1.4rem] font-semibold tracking-tight text-slate-900">
              {value}
            </p>
            <p className="mt-1 text-[13px] font-medium text-slate-500">{label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MemberCard({ member }) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
  const completionPercentage = Math.round(
    (member.completedTasks / member.assignedTasks) * 100
  );

  return (
    <article className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col items-start gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${member.accent} text-sm font-bold text-white shadow-sm`}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-[15px] font-semibold text-slate-900">
            {member.name}
          </h3>
          <p className="mt-0.5 text-xs text-slate-500">{member.role}</p>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
              Completion
            </p>
            <p className="mt-1 text-[1.35rem] font-semibold tracking-tight text-slate-900">
              {completionPercentage}%
            </p>
          </div>
          <p className="text-xs font-medium text-slate-500">
            {member.completedTasks}/{member.assignedTasks} tasks
          </p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${member.accent}`}
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {memberStatConfig.map(({ key, label }) => (
          <div
            key={label}
            className="flex min-h-[108px] flex-col justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-3"
          >
            <p className="text-[10px] font-medium uppercase leading-4 tracking-[0.14em] text-slate-400">
              {label}
            </p>
            <p className="mt-3 text-[1.25rem] font-semibold tracking-tight text-slate-900">
              {member[key]}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

function AnalyticsPage() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="-mx-6 -mt-6 border-b border-gray-100 bg-white px-6 py-4 md:-mx-8 md:-mt-8 md:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-[18px] font-bold tracking-tight text-slate-900">
              Analytics
            </h1>
            <p className="mt-0.5 text-[12px] text-slate-400">
              Track project progress and member performance in one place.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3">
              {[
                { label: "Total", val: 48, color: "text-slate-700" },
                { label: "Done", val: 15, color: "text-emerald-600" },
                { label: "Overdue", val: 5, color: "text-rose-500" },
              ].map(({ label, val, color }) => (
                <div
                  key={label}
                  className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-center"
                >
                  <div className={`text-[15px] font-bold ${color}`}>{val}</div>
                  <div className="text-[10px] font-medium text-slate-400">{label}</div>
                </div>
              ))}
            </div>

            <div className="hidden h-6 w-px bg-slate-200 sm:block" />

            <div className="text-right">
              <span className="text-[13px] font-semibold text-slate-700">
                ProjectFlow
              </span>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white shadow-sm">
              PF
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto pt-6">
        <section className="space-y-6">
          <ProjectOverviewCard />

          <section className="space-y-4">
            <div>
              <h2 className="text-[1.6rem] font-semibold tracking-tight text-slate-900">
                Member Analytics
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                View task progress for each team member.
              </p>
            </div>

            <div className="grid gap-4 xl:grid-cols-4">
              {membersAnalytics.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default AnalyticsPage;
