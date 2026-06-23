import { Sparkles, Users } from "lucide-react";

function CurrentProjectCard({ project }) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-amber-100 bg-gradient-to-br from-[#fff8ee] via-white to-[#eefbf8] p-6 shadow-sm sm:p-7">
      <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-amber-100/60 blur-3xl" />
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-teal-100/70 blur-3xl" />
      <div className="absolute -bottom-10 right-10 h-28 w-28 rounded-full bg-sky-100/80 blur-2xl" />

      <div className="relative flex flex-col gap-6">
        <div className="min-w-0 flex-1">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
              <Sparkles className="h-3 w-3 text-amber-300" />
              Current Project
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {project.status}
            </span>
          </div>

          <h2 className="mb-3 text-[30px] font-semibold tracking-tight text-slate-900 sm:text-[34px]">
            {project.name}
          </h2>
          <p className="max-w-xl text-[14px] leading-7 text-slate-600 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/80 bg-white/75 px-4 py-4 shadow-sm backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Your Role
            </p>
            <p className="mt-2 text-[18px] font-semibold text-slate-900">{project.role}</p>
          </div>

          <div className="rounded-2xl border border-white/80 bg-white/75 px-4 py-4 shadow-sm backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Members
            </p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Users className="h-4 w-4" />
              </div>
              <p className="text-[18px] font-semibold text-slate-900">{project.memberCount}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentProjectCard;
