import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import {
  getInitials,
  getProjectGradient,
} from "@/features/projects/utils/projectUtils";

function ProjectCard({ project, index }) {
  const isManager = project.role === "Manager";
  const gradient = getProjectGradient(index);
  const initials = getInitials(project.name);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradient}`} />

      <div className="flex items-start gap-3 pt-1">
        <div
          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-sm`}
        >
          <span className="text-[13px] font-bold">{initials}</span>
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-semibold tracking-tight text-slate-900">
            {project.name}
          </p>
          <div className="mt-1.5 flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[12px] text-slate-500">
              {project.memberCount} members
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            isManager
              ? "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {isManager ? <CheckCircle2 className="h-3 w-3" strokeWidth={2.2} /> : null}
          {project.role}
        </span>

        <button
          type="button"
          className="flex items-center gap-1 rounded-xl bg-slate-50 px-3 py-1.5 text-[12px] font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
        >
          Open
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
