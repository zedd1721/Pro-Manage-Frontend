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
    <article className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div
          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-sm`}
        >
          <span className="text-[13px] font-bold">{initials}</span>
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[14px] font-bold text-gray-900">{project.name}</p>
          <div className="mt-1 flex items-center gap-1.5">
            <Users className="h-3 w-3 text-gray-400" />
            <span className="text-[11.5px] text-gray-400">
              {project.memberCount} members
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            isManager ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-500"
          }`}
        >
          {isManager ? <CheckCircle2 className="h-3 w-3" strokeWidth={2.2} /> : null}
          {project.role}
        </span>

        <button
          type="button"
          className="flex items-center gap-1 rounded-lg bg-gray-50 px-3 py-1.5 text-[12px] font-semibold text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          Switch
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
