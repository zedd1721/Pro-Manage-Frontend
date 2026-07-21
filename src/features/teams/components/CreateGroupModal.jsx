import { Check, Plus, Users, X } from "lucide-react";
import { useState } from "react";
import { members } from "@/features/teams/data/teamsData";
import { getAvatarColor, getInitials } from "@/features/teams/utils/teamUtils";

function CreateGroupModal({ onClose, onCreate }) {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);

  function toggleMember(member) {
    setSelectedMembers((current) =>
      current.some((item) => item.id === member.id)
        ? current.filter((item) => item.id !== member.id)
        : [...current, member]
    );
  }

  function handleCreate() {
    if (!groupName.trim()) {
      return;
    }

    onCreate({
      name: groupName.trim(),
      description: description.trim() || "New team space for project collaboration.",
      members: selectedMembers,
    });
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(15,23,42,0.45)",
        backdropFilter: "blur(2px)",
      }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex w-full max-w-[460px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50">
              <Plus className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
            </div>
            <div>
              <h2 className="text-[15px] font-bold text-gray-900">Create Group</h2>
              <p className="text-[11px] text-gray-400">
                Start a dedicated space for your team.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-col gap-4 px-5 py-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
              Group Name
            </label>
            <input
              autoFocus
              type="text"
              value={groupName}
              onChange={(event) => setGroupName(event.target.value)}
              placeholder="e.g. Product Design Team"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-[13px] text-gray-800 placeholder-gray-300 transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-50"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
              Description
            </label>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={3}
              placeholder="What will this group be used for?"
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-2.5 text-[13px] text-gray-800 placeholder-gray-300 transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
              <Users className="h-3.5 w-3.5" />
              Add Members
            </label>
            <div className="kanban-scroll flex max-h-[220px] flex-col gap-2 overflow-y-auto pr-1">
              {members.map((member) => {
                const isSelected = selectedMembers.some((item) => item.id === member.id);
                const isOnline = member.status === "Online";

                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => toggleMember(member)}
                    className={`flex items-center gap-3 rounded-xl border p-2.5 text-left transition-all ${
                      isSelected
                        ? "border-blue-300 bg-blue-50"
                        : "border-gray-100 hover:bg-gray-50"
                    }`}
                  >
                    <div className="relative flex-shrink-0">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-bold text-white ${getAvatarColor(member.id)}`}
                      >
                        {getInitials(member.name)}
                      </div>
                      <span
                        className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ring-2 ring-white ${
                          isOnline ? "bg-emerald-500" : "bg-gray-300"
                        }`}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-semibold text-gray-900">
                        {member.name}
                      </p>
                      <p className="truncate text-[11px] text-gray-400">
                        {member.role}
                      </p>
                    </div>
                    <div
                      className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md transition-all ${
                        isSelected ? "bg-blue-600 text-white" : "border border-gray-200"
                      }`}
                    >
                      {isSelected ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-gray-100 bg-gray-50/80 px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border border-gray-200 py-2.5 text-[13px] font-semibold text-gray-600 transition-colors hover:bg-white"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleCreate}
            disabled={!groupName.trim()}
            className="flex-1 rounded-xl bg-sky-500 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Create Group
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateGroupModal;
