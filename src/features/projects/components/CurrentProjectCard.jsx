import { Sparkles, Users } from "lucide-react";

function CurrentProjectCard({ project }) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg">
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/5" />
      <div className="absolute -bottom-10 -right-4 h-32 w-32 rounded-full bg-white/5" />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/70">
              <Sparkles className="h-3 w-3" />
              Current Project
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {project.status}
            </span>
          </div>

          <h2 className="mb-2 text-[24px] font-bold tracking-tight text-white">
            {project.name}
          </h2>
          <p className="max-w-md text-[13px] leading-relaxed text-white/60">
            {project.description}
          </p>
        </div>

        <div className="flex gap-4 sm:flex-col sm:items-end sm:gap-3">
          <div className="min-w-[110px] rounded-xl border border-white/10 bg-white/10 px-4 py-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
              Your Role
            </p>
            <p className="text-[14px] font-bold text-white">{project.role}</p>
          </div>

          <div className="min-w-[110px] rounded-xl border border-white/10 bg-white/10 px-4 py-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
              Members
            </p>
            <div className="flex items-baseline gap-1">
              <Users className="h-3.5 w-3.5 text-white/60" />
              <p className="text-[14px] font-bold text-white">
                {project.memberCount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentProjectCard;
