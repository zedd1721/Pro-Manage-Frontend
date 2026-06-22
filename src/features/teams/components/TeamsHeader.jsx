import { FolderKanban } from "lucide-react";
import { members } from "@/features/teams/data/teamsData";

function TeamsHeader() {
  const onlineMembers = members.filter((member) => member.status === "Online").length;

  return (
    <header className="-mx-6 -mt-6 border-b border-gray-100 bg-white px-6 py-4 md:-mx-8 md:-mt-8 md:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-[18px] font-bold tracking-tight text-slate-900">
            Teams
          </h1>
          <p className="mt-0.5 text-[12px] text-slate-400">
            Manage project members and communicate with your team.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-center">
            <div className="text-[15px] font-bold text-emerald-600">
              {onlineMembers}
            </div>
            <div className="text-[10px] font-medium text-slate-400">Online</div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-2 shadow-sm">
            <FolderKanban className="h-4 w-4 text-slate-400" />
            <span className="text-[12px] font-semibold text-slate-500">
              Current Project:
            </span>
            <span className="text-[12.5px] font-bold text-slate-900">
              ProjectFlow
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TeamsHeader;
