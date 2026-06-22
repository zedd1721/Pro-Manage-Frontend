import { Check, Search, UserPlus, X } from "lucide-react";
import { availableUsers } from "@/features/teams/data/teamsData";
import { getAvatarColor, getInitials } from "@/features/teams/utils/teamUtils";
import { useState } from "react";

function AddUserToGroupModal({ groupName, existingIds, onAdd, onClose }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const filtered = availableUsers.filter(
    (user) =>
      !existingIds.includes(user.id) &&
      user.name.toLowerCase().includes(search.toLowerCase())
  );

  function toggle(id) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((selectedId) => selectedId !== id)
        : [...current, id]
    );
  }

  function handleConfirm() {
    availableUsers
      .filter((user) => selected.includes(user.id))
      .forEach((user) => onAdd(user));
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
      <div className="flex w-full max-w-[440px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50">
              <UserPlus className="h-4 w-4 text-blue-600" strokeWidth={2.2} />
            </div>
            <div>
              <h2 className="text-[15px] font-bold text-gray-900">
                Add Users to Group
              </h2>
              <p className="text-[11px] text-gray-400">{groupName}</p>
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

        <div className="px-5 py-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-300" />
            <input
              autoFocus
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search users by name..."
              className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2.5 text-[13px] text-gray-800 placeholder-gray-300 transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-50"
            />
          </div>
        </div>

        <div className="flex max-h-[320px] flex-1 flex-col gap-1.5 overflow-y-auto px-5 pb-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-[13px] text-gray-400">
              No users found to add.
            </div>
          ) : (
            filtered.map((user) => {
              const isSelected = selected.includes(user.id);
              const isOnline = user.status === "Online";

              return (
                <button
                  key={user.id}
                  type="button"
                  onClick={() => toggle(user.id)}
                  className={`flex items-center gap-3 rounded-xl border p-2.5 text-left transition-all ${
                    isSelected
                      ? "border-blue-300 bg-blue-50"
                      : "border-gray-100 hover:bg-gray-50"
                  }`}
                >
                  <div className="relative flex-shrink-0">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-bold text-white ${getAvatarColor(user.id)}`}
                    >
                      {getInitials(user.name)}
                    </div>
                    <span
                      className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ring-2 ring-white ${
                        isOnline ? "bg-emerald-500" : "bg-gray-300"
                      }`}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-semibold text-gray-900">
                      {user.name}
                    </p>
                    <p className="truncate text-[11px] text-gray-400">
                      {user.role}
                    </p>
                  </div>
                  <div
                    className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md transition-all ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "border border-gray-200"
                    }`}
                  >
                    {isSelected ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
                  </div>
                </button>
              );
            })
          )}
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
            onClick={handleConfirm}
            disabled={selected.length === 0}
            className="flex-1 rounded-xl bg-sky-500 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Add {selected.length > 0 ? `${selected.length} ` : ""}User
            {selected.length !== 1 ? "s" : ""}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUserToGroupModal;
