import { useState, useRef, useEffect } from "react";
import {
  X,
  Plus,
  Trash2,
  ChevronDown,
  CheckSquare,
  Tag,
  CalendarDays,
} from "lucide-react";

const PRIORITY_OPTIONS = [
  { value: "low",    label: "Low",    dot: "bg-slate-400",  bg: "bg-slate-50",  text: "text-slate-600"  },
  { value: "medium", label: "Medium", dot: "bg-blue-400",   bg: "bg-blue-50",   text: "text-blue-600"   },
  { value: "high",   label: "High",   dot: "bg-orange-400", bg: "bg-orange-50", text: "text-orange-600" },
  { value: "urgent", label: "Urgent", dot: "bg-red-500",    bg: "bg-red-50",    text: "text-red-600"    },
];

const CATEGORIES = [
  { label: "Planning",  bg: "bg-violet-100", text: "text-violet-700", ring: "ring-violet-300" },
  { label: "Research",  bg: "bg-sky-100",    text: "text-sky-700",    ring: "ring-sky-300"    },
  { label: "Design",    bg: "bg-pink-100",   text: "text-pink-700",   ring: "ring-pink-300"   },
  { label: "Feature",   bg: "bg-emerald-100",text: "text-emerald-700",ring: "ring-emerald-300"},
  { label: "DevOps",    bg: "bg-orange-100", text: "text-orange-700", ring: "ring-orange-300" },
  { label: "Docs",      bg: "bg-teal-100",   text: "text-teal-700",   ring: "ring-teal-300"   },
  { label: "Bug Fix",   bg: "bg-red-100",    text: "text-red-700",    ring: "ring-red-300"    },
  { label: "Testing",   bg: "bg-amber-100",  text: "text-amber-700",  ring: "ring-amber-300"  },
];

const ASSIGNEES = ["Kumar R", "Aisha S", "Max J", "Priya N", "Luca V"];
const AVATAR_COLORS = ["bg-violet-500", "bg-sky-500", "bg-emerald-500", "bg-amber-500", "bg-pink-500"];

export default function AddTaskModal({ onClose, onSave }) {
  const [title, setTitle]         = useState("");
  const [priority, setPriority]   = useState("medium");
  const [assignee, setAssignee]   = useState("");
  const [category, setCategory]   = useState("");
  const [dueDate, setDueDate]     = useState("");
  const [priorityOpen, setPriorityOpen] = useState(false);
  const [assigneeOpen, setAssigneeOpen] = useState(false);
  const [checklist, setChecklist] = useState([]);
  const [newItem, setNewItem]     = useState("");
  const newItemRef = useRef(null);
  const priorityRef = useRef(null);
  const assigneeRef = useRef(null);

  const priorityOption = PRIORITY_OPTIONS.find((p) => p.value === priority);
  const selectedCategory = CATEGORIES.find((c) => c.label === category);

  useEffect(() => {
    function handler(e) {
      if (priorityRef.current && !priorityRef.current.contains(e.target))
        setPriorityOpen(false);
      if (assigneeRef.current && !assigneeRef.current.contains(e.target))
        setAssigneeOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function addChecklistItem() {
    if (!newItem.trim()) return;
    setChecklist((prev) => [...prev, { id: crypto.randomUUID(), text: newItem.trim() }]);
    setNewItem("");
    newItemRef.current?.focus();
  }

  function deleteChecklistItem(id) {
    setChecklist((prev) => prev.filter((i) => i.id !== id));
  }

  function updateChecklistItem(id, text) {
    setChecklist((prev) => prev.map((i) => (i.id === id ? { ...i, text } : i)));
  }

  function handleSave() {
    if (!title.trim()) return;
    onSave({
      title: title.trim(),
      priority,
      assignee,
      category,
      dueDate,
      checklist,
    });
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(15,23,42,0.45)", backdropFilter: "blur(2px)" }}
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-[500px] flex flex-col overflow-hidden animate-in"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
              <Plus className="w-4 h-4 text-blue-600" strokeWidth={2.5} />
            </div>
            <h2 className="text-[15px] font-bold text-gray-900">Add New Task</h2>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 flex flex-col gap-5 overflow-y-auto max-h-[72vh]">

          {/* Task name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
              Task Name <span className="text-red-400">*</span>
            </label>
            <input
              autoFocus
              type="text"
              placeholder="e.g. Design onboarding screen"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-[13.5px] text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
              <Tag className="w-3 h-3" />
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const isSelected = category === cat.label;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setCategory(isSelected ? "" : cat.label)}
                    className={`
                      cursor-pointer px-3 py-1.5 rounded-full text-[12px] font-semibold transition-all border
                      ${isSelected
                        ? `${cat.bg} ${cat.text} ring-2 ${cat.ring} border-transparent scale-105 shadow-sm`
                        : `bg-gray-50 text-gray-500 border-gray-100 hover:${cat.bg} hover:${cat.text} hover:border-transparent`
                      }
                    `}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
            {selectedCategory && (
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[11px] text-gray-400">Selected:</span>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${selectedCategory.bg} ${selectedCategory.text}`}>
                  {selectedCategory.label}
                </span>
                <button
                  onClick={() => setCategory("")}
                  className="text-[10px] text-gray-400 hover:text-gray-600 ml-0.5 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>

          {/* Priority + Assign row */}
          <div className="grid grid-cols-2 gap-3">
            {/* Priority */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                Priority
              </label>
              <div ref={priorityRef} className="relative">
                <button
                  onClick={() => { setPriorityOpen((o) => !o); setAssigneeOpen(false); }}
                  className={`w-full cursor-pointer flex items-center justify-between px-3 py-2.5 rounded-xl border text-[13px] font-medium transition-all ${
                    priorityOpen
                      ? "border-blue-400 ring-2 ring-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  } ${priorityOption.text} ${priorityOption.bg}`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${priorityOption.dot}`} />
                    {priorityOption.label}
                  </div>
                  <ChevronDown
                    className={`w-3 h-3 text-gray-400 transition-transform flex-shrink-0 ${priorityOpen ? "rotate-180" : ""}`}
                    strokeWidth={2}
                  />
                </button>

                {priorityOpen && (
                  <div className="absolute z-20 top-full mt-1.5 left-0 right-0 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
                    {PRIORITY_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setPriority(opt.value); setPriorityOpen(false); }}
                        className={`w-full cursor-pointer flex items-center gap-2.5 px-3 py-2.5 text-[12.5px] font-medium transition-colors hover:bg-gray-50 ${
                          priority === opt.value ? `${opt.text} ${opt.bg}` : "text-gray-600"
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${opt.dot}`} />
                        {opt.label}
                        {priority === opt.value && (
                          <span className="ml-auto text-[9px] font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Assign To */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                Assign To
              </label>
              <div ref={assigneeRef} className="relative">
                <button
                  onClick={() => { setAssigneeOpen((o) => !o); setPriorityOpen(false); }}
                  className={`w-full cursor-pointer flex items-center justify-between px-3 py-2.5 rounded-xl border text-[13px] transition-all ${
                    assigneeOpen
                      ? "border-blue-400 ring-2 ring-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {assignee ? (
                    <div className="flex items-center gap-2 min-w-0">
                      <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[8px] font-bold text-white ${AVATAR_COLORS[ASSIGNEES.indexOf(assignee) % AVATAR_COLORS.length]}`}>
                        {assignee.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className="text-gray-800 font-medium text-[12.5px] truncate">{assignee}</span>
                    </div>
                  ) : (
                    <span className="text-gray-300 text-[12.5px]">Select member</span>
                  )}
                  <ChevronDown
                    className={`w-3 h-3 text-gray-400 transition-transform flex-shrink-0 ${assigneeOpen ? "rotate-180" : ""}`}
                    strokeWidth={2}
                  />
                </button>

                {assigneeOpen && (
                  <div className="absolute z-20 top-full mt-1.5 left-0 right-0 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
                    {ASSIGNEES.map((name, i) => {
                      const initials = name.split(" ").map((n) => n[0]).join("");
                      return (
                        <button
                          key={name}
                          onClick={() => { setAssignee(name); setAssigneeOpen(false); }}
                          className={`w-full cursor-pointer flex items-center gap-3 px-3 py-2.5 text-[12.5px] font-medium transition-colors hover:bg-gray-50 ${
                            assignee === name ? "bg-blue-50 text-blue-700" : "text-gray-700"
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0 ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}>
                            {initials}
                          </div>
                          {name}
                          {assignee === name && (
                            <span className="ml-auto text-[9px] font-bold text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded-full">✓</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Due date */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-3">
              <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                <CalendarDays className="w-3 h-3" />
                Due Date
              </label>
              {dueDate ? (
                <button
                  type="button"
                  onClick={() => setDueDate("")}
                  className="text-[11px] font-medium text-gray-400 transition-colors hover:text-gray-600"
                >
                  Clear
                </button>
              ) : (
                <span className="text-[10.5px] text-gray-300">Optional</span>
              )}
            </div>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full cursor-pointer rounded-xl border border-gray-200 px-4 py-2.5 text-[13px] text-gray-700 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-50 transition-all"
            />
          </div>

          {/* Checklist */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
              <CheckSquare className="w-3 h-3" />
              Checklist
              {checklist.length > 0 && (
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full">
                  {checklist.length}
                </span>
              )}
            </label>

            {/* Items */}
            {checklist.length > 0 && (
              <div className="flex flex-col gap-1.5 mb-0.5">
                {checklist.map((item, idx) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 group transition-all hover:border-gray-200"
                  >
                    <span className="text-[10px] font-bold text-gray-300 w-4 text-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <input
                      type="text"
                      value={item.text}
                      onChange={(e) => updateChecklistItem(item.id, e.target.value)}
                      className="flex-1 bg-transparent text-[13px] text-gray-700 focus:outline-none placeholder-gray-300 min-w-0"
                      placeholder="Checklist item..."
                    />
                    <button
                      onClick={() => deleteChecklistItem(item.id)}
                      className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Add row */}
            <div className="flex items-center gap-2">
              <input
                ref={newItemRef}
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") addChecklistItem(); }}
                placeholder="Add a checklist item and press Enter..."
                className="flex-1 border border-dashed border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-700 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 focus:border-solid transition-all bg-gray-50 focus:bg-white"
              />
              <button
                onClick={addChecklistItem}
                disabled={!newItem.trim()}
                className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                <Plus className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50/80">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-[13.5px] font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!title.trim()}
            className="flex-1 py-2.5 rounded-xl bg-gray-900 text-[13.5px] font-semibold text-white hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
}
