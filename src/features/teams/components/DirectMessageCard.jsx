import { MessageCircle, Video } from "lucide-react";
import { AVATAR_COLORS } from "@/features/teams/data/teamsData";
import { getInitials } from "@/features/teams/utils/teamUtils";

function DirectMessageCard({ message, index, onOpen }) {
  const isOnline = message.status === "Online";
  const initials = getInitials(message.name);

  return (
    <div
      onClick={onOpen}
      className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="relative flex-shrink-0">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full text-[12px] font-bold text-white ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}
          >
            {initials}
          </div>
          <span
            className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ring-2 ring-white ${
              isOnline ? "bg-emerald-500" : "bg-gray-300"
            }`}
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[13.5px] font-semibold text-gray-900">
            {message.name}
          </p>
          <p className="truncate text-[11.5px] text-gray-400">
            {message.lastMessage}
          </p>
        </div>

        <div className="flex flex-shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onOpen();
            }}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-gray-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
            title="Message"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            onClick={(event) => event.stopPropagation()}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-gray-500 transition-colors hover:bg-violet-50 hover:text-violet-600"
            title="Video Call"
          >
            <Video className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DirectMessageCard;
