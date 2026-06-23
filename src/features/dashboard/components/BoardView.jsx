import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ChevronDown, UserPlus } from "lucide-react";
import AddTaskModal from "@/features/dashboard/components/AddTaskModal";
import KanbanColumn from "@/features/dashboard/components/KanbanColumn";
import { COLUMNS, SAMPLE_CARDS } from "@/features/dashboard/data/dashboardData";

function BoardView() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("This week");
  const [showAddTask, setShowAddTask] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [cards, setCards] = useState(SAMPLE_CARDS);

  function handleToggleChecklistItem(cardId, itemId) {
    setCards((currentCards) =>
      currentCards.map((card) => {
        if (card.id !== cardId) {
          return card;
        }

        const checklistItems = card.checklistItems.map((item) =>
          item.id === itemId ? { ...item, done: !item.done } : item
        );
        const doneCount = checklistItems.filter((item) => item.done).length;

        return {
          ...card,
          checklistItems,
          checklist: {
            ...card.checklist,
            done: doneCount,
            total: checklistItems.length,
          },
        };
      })
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-[20px] font-bold tracking-tight text-gray-900">
            Board
          </h2>
          <div className="h-4 w-px bg-gray-200" />
          <button
            type="button"
            onClick={() => navigate({ to: "/teams" })}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-[12.5px] font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
          >
            <UserPlus className="w-3.5 h-3.5" strokeWidth={1.8} />
            Add People
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
            Sprint 3
          </span>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-[12.5px] font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
            onClick={() =>
              setFilter(filter === "This week" ? "This month" : "This week")
            }
          >
            {filter}
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-x-auto overflow-y-hidden pb-4">
        <div className="flex h-full min-w-max gap-5">
          {COLUMNS.map((col) => (
            <KanbanColumn
              key={col.id}
              col={col}
              cards={cards.filter((card) => card.column === col.id)}
              onAddTask={col.id === "todo" ? () => setShowAddTask(true) : undefined}
              expandedCardId={expandedCardId}
              onToggleCard={(cardId) =>
                setExpandedCardId((current) => (current === cardId ? null : cardId))
              }
              onToggleChecklistItem={handleToggleChecklistItem}
            />
          ))}
        </div>
      </div>

      {showAddTask ? (
        <AddTaskModal
          onClose={() => setShowAddTask(false)}
          onSave={(task) => {
            console.log("New task:", task);
          }}
        />
      ) : null}
    </div>
  );
}

export default BoardView;
