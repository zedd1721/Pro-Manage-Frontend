import { useEffect, useRef, useState } from "react";
import {
  CheckSquare,
  Clock,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";
import Avatar from "@/features/dashboard/components/Avatar";
import { PRIORITY_CONFIG } from "@/features/dashboard/data/dashboardData";

function KanbanCard({ card, expanded, onToggle, onToggleChecklistItem }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const priority = PRIORITY_CONFIG[card.priority];
  const checkPct = card.checklist.total > 0
    ? (card.checklist.done / card.checklist.total) * 100
    : 0;

  useEffect(() => {
    function handleOutsideClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <article
      className={`group shrink-0 overflow-hidden rounded-xl border bg-white text-left shadow-sm transition-all duration-200 ${
        expanded
          ? "border-indigo-200 shadow-md"
          : "border-gray-100 hover:-translate-y-0.5 hover:shadow-md"
      }`}
    >
      <button
        type="button"
        onClick={() => onToggle(card.id)}
        className="w-full cursor-pointer p-3.5 text-left"
      >
        <div className="mb-2.5 flex items-center justify-between">
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${card.tagColor}`}>
            {card.tag}
          </span>
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setMenuOpen((current) => !current);
              }}
              className="flex h-6 w-6 items-center justify-center rounded-md text-gray-400 transition-all group-hover:bg-gray-100 group-hover:text-gray-600"
            >
              <MoreHorizontal className="w-3.5 h-3.5" />
            </button>

            {menuOpen ? (
              <div className="absolute right-0 top-8 z-20 min-w-[120px] rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setMenuOpen(false);
                    console.log("Edit card:", card.id);
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  <Pencil className="h-3.5 w-3.5" />
                  Edit
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setMenuOpen(false);
                    console.log("Delete card:", card.id);
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Delete
                </button>
              </div>
            ) : null}
          </div>
        </div>

        <p className="mb-3 text-[14px] font-semibold leading-snug text-gray-800">
          {card.title}
        </p>

        {card.checklist.total > 0 ? (
          <div className="mb-3">
            <div className="mb-1 flex items-center justify-between">
              <div className="flex items-center gap-1 text-gray-400">
                <CheckSquare className="w-3 h-3" />
                <span className="text-[11px]">
                  {card.checklist.done}/{card.checklist.total}
                </span>
              </div>
              <span className="text-[11px] text-gray-400">{Math.round(checkPct)}%</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${checkPct}%`,
                  backgroundColor: checkPct === 100 ? "#10b981" : "#6366f1",
                }}
              />
            </div>
          </div>
        ) : null}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-1 ${priority.color}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${priority.dot}`} />
              <span className="text-[11px] font-medium">{priority.label}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <Clock className="w-2.5 h-2.5" />
              <span className="text-[11px]">{card.dueDate}</span>
            </div>
          </div>

          <div className="flex items-center -space-x-1.5">
            {card.assignees.slice(0, 3).map((assignee, index) => (
              <Avatar key={`${card.id}-${assignee}`} initials={assignee} index={index} />
            ))}
          </div>
        </div>

        {/* <div className="mt-2.5 flex items-center justify-end border-t border-gray-50 pt-2.5">
          <Flag className="w-2.5 h-2.5 text-gray-200" />
        </div> */}
      </button>

      <div className="card-expand-shell" data-open={expanded ? "true" : "false"}>
        <div className="card-expand-inner">
          <div className="border-t border-indigo-100 bg-slate-50/80 px-3.5 py-3.5">
            <div className="mb-3 rounded-xl border border-slate-100 bg-white px-3 py-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Checklist Progress
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {card.checklist.done}/{card.checklist.total} completed
                  </p>
                </div>
                <p className="text-sm font-semibold text-slate-700">
                  {Math.round(checkPct)}%
                </p>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-indigo-500"
                  style={{ width: `${checkPct}%` }}
                />
              </div>
            </div>

            <div className="card-expand-scroll space-y-2.5 pr-1">
              {card.checklistItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onToggleChecklistItem(card.id, item.id)}
                  className="flex w-full items-start gap-3 rounded-xl border border-slate-100 bg-white px-3 py-3 text-left transition-colors hover:border-slate-200 hover:bg-slate-50"
                >
                  <div
                    className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-md border ${
                      item.done
                        ? "border-emerald-200 bg-emerald-50 text-emerald-600"
                        : "border-slate-200 bg-slate-50 text-slate-300"
                    }`}
                  >
                    <CheckSquare className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-[13px] font-medium ${
                        item.done ? "text-slate-500 line-through" : "text-slate-800"
                      }`}
                    >
                      {item.text}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      {item.done ? "Completed" : "Pending"}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default KanbanCard;
