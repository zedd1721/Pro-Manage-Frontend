import { Plus } from "lucide-react";
import KanbanCard from "@/features/dashboard/components/KanbanCard";

function KanbanColumn({
  col,
  cards,
  onAddTask,
  expandedCardId,
  onToggleCard,
  onToggleChecklistItem,
}) {
  const ColumnIcon = col.icon;

  return (
    <div className="flex w-[300px] min-w-[300px] min-h-0 flex-col">
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <ColumnIcon className="h-3 w-3 text-gray-400" />
          <span className="text-[14px] font-semibold text-gray-700">{col.title}</span>
          <span className="rounded-full bg-gray-100 px-1.5 py-0.5 text-[11px] font-semibold text-gray-400">
            {cards.length}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {onAddTask ? (
            <button
              type="button"
              onClick={onAddTask}
              className="flex h-6 w-6 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            >
              <Plus className="w-3.5 h-3.5" strokeWidth={2.2} />
            </button>
          ) : null}
        </div>
      </div>

      <div className={`mb-3 h-0.5 rounded-full ${col.accent} opacity-60`} />

      <div className="flex min-h-0 flex-1 flex-col gap-2.5">
        <div className="kanban-scroll flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto pr-1">
          {cards.map((card) => (
            <KanbanCard
              key={card.id}
              card={card}
              expanded={expandedCardId === card.id}
              onToggle={onToggleCard}
              onToggleChecklistItem={onToggleChecklistItem}
            />
          ))}
        </div>

        {onAddTask ? (
          <button
            type="button"
            onClick={onAddTask}
            className="group flex items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-gray-200 py-2.5 text-[12px] font-medium text-gray-400 transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-500"
          >
            <Plus className="w-3.5 h-3.5 transition-transform group-hover:scale-110" strokeWidth={2.2} />
            Add task
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default KanbanColumn;
