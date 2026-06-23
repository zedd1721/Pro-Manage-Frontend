import { X } from "lucide-react";
import { AVATAR_COLORS } from "@/features/teams/data/teamsData";
import { getInitials } from "@/features/teams/utils/teamUtils";

function MemberCard({ member, index, onRemove }) {
  const isOnline = member.status === "Online";
  const initials = getInitials(member.name);

  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full text-[13px] font-bold text-white ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}
          >
            {initials}
          </div>
          <span
            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ring-2 ring-white ${
              isOnline ? "bg-emerald-500" : "bg-gray-300"
            }`}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-[14px] font-semibold text-gray-900">
                {member.name}
              </p>
              <p className="truncate text-[12px] text-gray-400">{member.email}</p>
            </div>
            <button
              type="button"
              onClick={onRemove}
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500 opacity-0 transition-colors group-hover:opacity-100 hover:bg-red-100"
              aria-label={`Remove ${member.name}`}
              title="Remove member"
            >
              <X className="h-4 w-4" strokeWidth={2.4} />
            </button>
          </div>

          <div className="mt-2.5 flex items-center gap-2">
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-600">
              {member.role}
            </span>
            <span
              className={`flex items-center gap-1 text-[11px] font-medium ${
                isOnline ? "text-emerald-600" : "text-gray-400"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isOnline ? "bg-emerald-500" : "bg-gray-300"
                }`}
              />
              {member.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
