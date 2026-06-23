import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Phone,
  Reply,
  Send,
  Trash2,
  UserPlus,
  Users,
  Video,
  X,
} from "lucide-react";
import { getAvatarColor, getInitials } from "@/features/teams/utils/teamUtils";

function ChatWindow({
  type,
  id,
  name,
  status,
  groupMembers,
  messages,
  onSend,
  onDeleteMessage,
  onBack,
  onAddUser,
}) {
  const [input, setInput] = useState("");
  const [replyTarget, setReplyTarget] = useState(null);
  const scrollRef = useRef(null);
  const isOnline = status === "Online";
  const isGroup = type === "group";
  const memberCount = groupMembers?.length ?? 0;

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, id]);

  function handleSend() {
    if (!input.trim()) {
      return;
    }

    onSend(
      input.trim(),
      replyTarget
        ? {
            id: replyTarget.id,
            senderId: replyTarget.senderId,
            text: replyTarget.text,
          }
        : null
    );
    setInput("");
    setReplyTarget(null);
  }

  function getSenderName(senderId) {
    if (senderId === 0) {
      return "You";
    }

    if (isGroup) {
      const matchedMember = groupMembers?.find((member) => member.id === senderId);
      return matchedMember?.name ?? "Unknown";
    }

    return name;
  }

  function getReplySenderLabel(replyMessage) {
    if (!replyMessage) {
      return "";
    }

    return getSenderName(replyMessage.senderId);
  }

  return (
    <div className="flex h-[calc(100vh-220px)] min-h-[500px] flex-col rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-3.5">
        <button
          type="button"
          onClick={onBack}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} />
        </button>

        <div className="relative flex-shrink-0">
          {isGroup ? (
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 text-white">
              <Users className="h-4 w-4" strokeWidth={2} />
            </div>
          ) : (
            <>
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-bold text-white ${getAvatarColor(id)}`}
              >
                {getInitials(name)}
              </div>
              <span
                className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ring-2 ring-white ${
                  isOnline ? "bg-emerald-500" : "bg-gray-300"
                }`}
              />
            </>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[14px] font-bold text-gray-900">{name}</p>
          <p className="text-[11.5px] text-gray-400">
            {isGroup ? `${memberCount} members` : isOnline ? "Online" : "Offline"}
          </p>
        </div>

        <div className="flex flex-shrink-0 items-center gap-1.5">
          {isGroup && onAddUser ? (
            <button
              type="button"
              onClick={onAddUser}
              className="flex items-center gap-1.5 rounded-lg bg-gray-50 px-3 py-2 text-[12px] font-semibold text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
              title="Add user"
            >
              <UserPlus className="h-3.5 w-3.5" strokeWidth={2} />
              <span className="hidden sm:inline">Add User</span>
            </button>
          ) : null}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-500 transition-colors hover:bg-violet-50 hover:text-violet-600"
            title="Video Call"
          >
            <Video className="h-4 w-4" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-500 transition-colors hover:bg-emerald-50 hover:text-emerald-600"
            title="Voice Call"
          >
            <Phone className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {isGroup && groupMembers ? (
        <div className="flex items-center gap-2 overflow-x-auto border-b border-gray-50 bg-gray-50/50 px-5 py-2.5">
          <span className="flex-shrink-0 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
            Members:
          </span>
          {groupMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-shrink-0 items-center gap-1.5 rounded-full border border-gray-100 bg-white pl-1 pr-2.5 py-0.5"
            >
              <div className="relative">
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white ${getAvatarColor(member.id)}`}
                >
                  {getInitials(member.name)}
                </div>
                <span
                  className={`absolute -bottom-0 -right-0 h-2 w-2 rounded-full ring-1 ring-white ${
                    member.status === "Online" ? "bg-emerald-500" : "bg-gray-300"
                  }`}
                />
              </div>
              <span className="whitespace-nowrap text-[11px] font-medium text-gray-600">
                {member.id === 0 ? "You" : member.name.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
      ) : null}

      <div
        ref={scrollRef}
        className="kanban-scroll flex flex-1 flex-col gap-3 overflow-y-auto bg-gray-50/30 px-5 py-4 pr-2"
      >
        {messages.length === 0 ? (
          <div className="flex flex-1 items-center justify-center text-[13px] text-gray-300">
            No messages yet. Say hello!
          </div>
        ) : (
          messages.map((message) => {
            const isMe = message.senderId === 0;
            const replySender = getReplySenderLabel(message.replyTo);

            return (
              <div
                key={message.id}
                className={`group flex max-w-[75%] flex-col gap-1 ${
                  isMe ? "self-end items-end" : "self-start items-start"
                }`}
              >
                {isGroup && !isMe ? (
                  <span className="px-1 text-[10px] font-semibold text-gray-400">
                    {getSenderName(message.senderId)}
                  </span>
                ) : null}
                <div className="flex items-start gap-2">
                  {isMe ? (
                    <div className="mt-1 flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                      <button
                        type="button"
                        onClick={() => setReplyTarget(message)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-gray-400 shadow-sm ring-1 ring-gray-100 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        title="Reply"
                      >
                        <Reply className="h-3.5 w-3.5" strokeWidth={2} />
                      </button>
                      <button
                        type="button"
                        onClick={() => onDeleteMessage(message.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-gray-400 shadow-sm ring-1 ring-gray-100 transition-colors hover:bg-red-50 hover:text-red-500"
                        title="Delete"
                      >
                        <Trash2 className="h-3.5 w-3.5" strokeWidth={2} />
                      </button>
                    </div>
                  ) : null}
                  <div
                    className={`rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed ${
                      isMe
                        ? "rounded-br-sm bg-gray-900 text-white"
                        : "rounded-bl-sm border border-gray-100 bg-white text-gray-800 shadow-sm"
                    }`}
                  >
                    {message.replyTo ? (
                      <div
                        className={`mb-2 rounded-xl border px-3 py-2 text-[11px] leading-relaxed ${
                          isMe
                            ? "border-white/10 bg-white/10 text-gray-200"
                            : "border-slate-100 bg-slate-50 text-slate-500"
                        }`}
                      >
                        <p
                          className={`font-semibold ${
                            isMe ? "text-white" : "text-slate-700"
                          }`}
                        >
                          {replySender}
                        </p>
                        <p className="truncate">{message.replyTo.text}</p>
                      </div>
                    ) : null}
                    {message.text}
                  </div>
                  {!isMe ? (
                    <div className="mt-1 flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                      <button
                        type="button"
                        onClick={() => setReplyTarget(message)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-gray-400 shadow-sm ring-1 ring-gray-100 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        title="Reply"
                      >
                        <Reply className="h-3.5 w-3.5" strokeWidth={2} />
                      </button>
                    </div>
                  ) : null}
                </div>
                <span className="px-1 text-[10px] text-gray-300">
                  {message.time}
                </span>
              </div>
            );
          })
        )}
      </div>

      <div className="border-t border-gray-100 px-4 py-3">
        {replyTarget ? (
          <div className="mb-2 flex items-start justify-between gap-3 rounded-xl border border-sky-100 bg-sky-50 px-3 py-2">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-sky-700">
                Replying to {getReplySenderLabel(replyTarget)}
              </p>
              <p className="truncate text-[12px] text-slate-500">{replyTarget.text}</p>
            </div>
            <button
              type="button"
              onClick={() => setReplyTarget(null)}
              className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-sky-500 transition-colors hover:bg-white hover:text-sky-700"
              title="Cancel reply"
            >
              <X className="h-3.5 w-3.5" strokeWidth={2.2} />
            </button>
          </div>
        ) : null}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                handleSend();
              }
            }}
            placeholder={`Message ${isGroup ? name : name.split(" ")[0]}...`}
            className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-[13px] text-gray-800 placeholder-gray-300 transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-50"
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={!input.trim()}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500 text-white shadow-sm transition-all hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <Send className="h-4 w-4" strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
