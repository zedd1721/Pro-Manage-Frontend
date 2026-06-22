import { MessageCircle, Users, Video } from "lucide-react";

const groupGradients = [
  "from-violet-500 to-violet-600",
  "from-sky-500 to-sky-600",
  "from-emerald-500 to-emerald-600",
  "from-amber-500 to-amber-600",
  "from-pink-500 to-pink-600",
];

function GroupCard({ group, index, onOpen }) {
  return (
    <div
      onClick={onOpen}
      className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${groupGradients[index % groupGradients.length]} text-white`}
        >
          <Users className="h-5 w-5" strokeWidth={2} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-[14px] font-bold text-gray-900">
              {group.name}
            </p>
            <div className="flex flex-shrink-0 items-center gap-1.5">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onOpen();
                }}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-gray-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
                title="Chat"
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

          <p className="mt-1 text-[12px] leading-relaxed text-gray-400">
            {group.description}
          </p>

          <div className="mt-2.5 flex items-center gap-1.5">
            <Users className="h-3 w-3 text-gray-400" />
            <span className="text-[11.5px] font-semibold text-gray-500">
              {group.membersCount} members
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
