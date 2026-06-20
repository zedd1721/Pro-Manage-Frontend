import { useState } from "react";
import "@/features/dashboard/dashboard.css";
import AddTaskModal from "@/features/dashboard/components/AddTaskModal";
import SideBar from "@/components/SideBar";
import {
  UserPlus,
  ChevronDown,
  Plus,
  MoreHorizontal,
  Flag,
  MessageSquare,
  Paperclip,
  Clock,
  CheckSquare,
  AlertCircle,
  Circle,
  CheckCircle2,
  ArrowUpCircle,
} from "lucide-react";

const SAMPLE_CARDS = [
  {
    id: "1",
    title: "Define project scope and objectives",
    priority: "high",
    tag: "Planning",
    tagColor: "bg-violet-100 text-violet-700",
    dueDate: "Jan 14",
    comments: 3,
    attachments: 2,
    checklist: { done: 2, total: 4 },
    assignees: ["KR", "AS"],
    column: "backlog",
  },
  {
    id: "2",
    title: "Conduct competitive analysis report",
    priority: "medium",
    tag: "Research",
    tagColor: "bg-sky-100 text-sky-700",
    dueDate: "Jan 18",
    comments: 5,
    attachments: 1,
    checklist: { done: 1, total: 3 },
    assignees: ["MJ"],
    column: "backlog",
  },
  {
    id: "3",
    title: "Design system component library",
    priority: "urgent",
    tag: "Design",
    tagColor: "bg-pink-100 text-pink-700",
    dueDate: "Jan 13",
    comments: 8,
    attachments: 4,
    checklist: { done: 5, total: 8 },
    assignees: ["KR", "AS", "MJ"],
    column: "todo",
  },
  {
    id: "4",
    title: "Set up CI/CD pipeline and deploy preview",
    priority: "high",
    tag: "DevOps",
    tagColor: "bg-orange-100 text-orange-700",
    dueDate: "Jan 15",
    comments: 2,
    attachments: 0,
    checklist: { done: 3, total: 5 },
    assignees: ["AS"],
    column: "todo",
  },
  {
    id: "5",
    title: "Write API documentation for v2 endpoints",
    priority: "low",
    tag: "Docs",
    tagColor: "bg-teal-100 text-teal-700",
    dueDate: "Jan 20",
    comments: 1,
    attachments: 1,
    checklist: { done: 0, total: 2 },
    assignees: ["MJ", "KR"],
    column: "todo",
  },
  {
    id: "6",
    title: "Implement authentication & user sessions",
    priority: "urgent",
    tag: "Feature",
    tagColor: "bg-emerald-100 text-emerald-700",
    dueDate: "Jan 12",
    comments: 11,
    attachments: 3,
    checklist: { done: 6, total: 7 },
    assignees: ["KR"],
    column: "inprogress",
  },
  {
    id: "7",
    title: "Responsive layout for mobile breakpoints",
    priority: "medium",
    tag: "Design",
    tagColor: "bg-pink-100 text-pink-700",
    dueDate: "Jan 16",
    comments: 4,
    attachments: 2,
    checklist: { done: 3, total: 4 },
    assignees: ["AS", "MJ"],
    column: "inprogress",
  },
  {
    id: "8",
    title: "Kick-off meeting & stakeholder alignment",
    priority: "low",
    tag: "Planning",
    tagColor: "bg-violet-100 text-violet-700",
    dueDate: "Jan 8",
    comments: 6,
    attachments: 1,
    checklist: { done: 4, total: 4 },
    assignees: ["KR", "AS", "MJ"],
    column: "done",
  },
  {
    id: "9",
    title: "Initial wireframes approved by client",
    priority: "medium",
    tag: "Design",
    tagColor: "bg-pink-100 text-pink-700",
    dueDate: "Jan 10",
    comments: 3,
    attachments: 5,
    checklist: { done: 3, total: 3 },
    assignees: ["AS"],
    column: "done",
  },
];

const COLUMNS = [
  {
    id: "backlog",
    title: "Backlog",
    accent: "bg-slate-400",
    icon: <Circle className="w-3 h-3" />,
  },
  {
    id: "todo",
    title: "To do",
    accent: "bg-blue-400",
    icon: <ArrowUpCircle className="w-3 h-3" />,
  },
  {
    id: "inprogress",
    title: "In progress",
    accent: "bg-amber-400",
    icon: <AlertCircle className="w-3 h-3" />,
  },
  {
    id: "done",
    title: "Done",
    accent: "bg-emerald-400",
    icon: <CheckCircle2 className="w-3 h-3" />,
  },
];

const PRIORITY_CONFIG = {
  low: { label: "Low", color: "text-slate-500", dot: "bg-slate-400" },
  medium: { label: "Medium", color: "text-blue-600", dot: "bg-blue-400" },
  high: { label: "High", color: "text-orange-500", dot: "bg-orange-400" },
  urgent: { label: "Urgent", color: "text-red-500", dot: "bg-red-500" },
};

const AVATAR_COLORS = ["bg-violet-500", "bg-sky-500", "bg-emerald-500", "bg-amber-500", "bg-pink-500"];

// ─── Avatar ───────────────────────────────────────────────────────────────────

function Avatar({ initials, index }) {
  return (
    <div
      className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white ring-2 ring-white ${
        AVATAR_COLORS[index % AVATAR_COLORS.length]
      }`}
    >
      {initials}
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function KanbanCard({ card }) {
  const p = PRIORITY_CONFIG[card.priority];
  const checkPct = card.checklist.total > 0
    ? (card.checklist.done / card.checklist.total) * 100
    : 0;

  return (
    <div className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
      {/* Top row: tag + menu */}
      <div className="flex items-center justify-between mb-2.5">
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${card.tagColor}`}>
          {card.tag}
        </span>
        <button className="opacity-0 group-hover:opacity-100 w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-400 transition-all">
          <MoreHorizontal className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Title */}
      <p className="text-[13px] font-semibold text-gray-800 leading-snug mb-3">
        {card.title}
      </p>

      {/* Checklist progress */}
      {card.checklist.total > 0 && (
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1 text-gray-400">
              <CheckSquare className="w-3 h-3" />
              <span className="text-[10px]">
                {card.checklist.done}/{card.checklist.total}
              </span>
            </div>
            <span className="text-[10px] text-gray-400">{Math.round(checkPct)}%</span>
          </div>
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${checkPct}%`,
                backgroundColor: checkPct === 100 ? "#10b981" : "#6366f1",
              }}
            />
          </div>
        </div>
      )}

      {/* Meta row */}
      <div className="flex items-center justify-between">
        {/* Priority + due */}
        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-1 ${p.color}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
            <span className="text-[10px] font-medium">{p.label}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Clock className="w-2.5 h-2.5" />
            <span className="text-[10px]">{card.dueDate}</span>
          </div>
        </div>

        {/* Assignees */}
        <div className="flex items-center -space-x-1.5">
          {card.assignees.slice(0, 3).map((a, i) => (
            <Avatar key={i} initials={a} index={i} />
          ))}
        </div>
      </div>

      {/* Footer: comments + attachments */}
      <div className="flex items-center gap-3 mt-2.5 pt-2.5 border-t border-gray-50">
        <button className="flex items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
          <MessageSquare className="w-3 h-3" />
          <span className="text-[10px]">{card.comments}</span>
        </button>
        <button className="flex items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
          <Paperclip className="w-3 h-3" />
          <span className="text-[10px]">{card.attachments}</span>
        </button>
        <div className="flex-1" />
        <Flag className="w-2.5 h-2.5 text-gray-200" />
      </div>
    </div>
  );
}

// ─── Column ───────────────────────────────────────────────────────────────────

function KanbanColumn({
  col,
  cards,
  onAddTask,
}) {
  return (
    <div className="flex min-w-[272px] flex-1 min-h-0 flex-col">
      {/* Column header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${col.accent}`} />
          <span className="text-[13px] font-semibold text-gray-700">{col.title}</span>
          <span className="text-[11px] font-semibold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full">
            {cards.length}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onAddTask}
            className="w-6 h-6 flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={2.2} />
          </button>
          <button className="w-6 h-6 flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
            <MoreHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Accent bar */}
      <div className={`h-0.5 rounded-full ${col.accent} mb-3 opacity-60`} />

      {/* Cards */}
      <div className="flex min-h-0 flex-1 flex-col gap-2.5">
        <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto pr-1">
          {cards.map((card) => (
            <KanbanCard key={card.id} card={card} />
          ))}
        </div>

        <button
          onClick={onAddTask}
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border-2 border-dashed border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-500 hover:bg-gray-50 transition-all text-[12px] font-medium group"
        >
          <Plus className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" strokeWidth={2.2} />
          Add task
        </button>
      </div>
    </div>
  );
}

// ─── Board ────────────────────────────────────────────────────────────────────

function BoardView() {
  const [filter, setFilter] = useState("This week");
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* Board toolbar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-[20px] font-bold text-gray-900 tracking-tight">
            Board
          </h2>
          <div className="h-4 w-px bg-gray-200" />
          <button className="flex items-center gap-1.5 text-[12.5px] text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-150 px-2.5 py-1.5 rounded-lg transition-colors font-medium">
            <UserPlus className="w-3.5 h-3.5" strokeWidth={1.8} />
            Add People
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Sprint badge */}
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
            Sprint 3
          </span>

          <button
            className="flex items-center gap-1.5 text-[12.5px] text-gray-700 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors bg-white shadow-sm font-medium"
            onClick={() =>
              setFilter(filter === "This week" ? "This month" : "This week")
            }
          >
            {filter}
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Columns */}
      <div className="flex-1 min-h-0 overflow-x-auto overflow-y-hidden pb-4">
        <div className="flex h-full min-w-max gap-5">
          {COLUMNS.map((col) => (
            <KanbanColumn
              key={col.id}
              col={col}
              cards={SAMPLE_CARDS.filter((c) => c.column === col.id)}
              onAddTask={col.id === "todo" ? () => setShowAddTask(true) : undefined}
            />
          ))}
        </div>
      </div>

      {showAddTask && (
        <AddTaskModal
          onClose={() => setShowAddTask(false)}
          onSave={(task) => {
            console.log("New task:", task);
          }}
        />
      )}
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const today = new Date("2024-01-12");
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const totalCards = SAMPLE_CARDS.length;
  const doneCards = SAMPLE_CARDS.filter((c) => c.column === "done").length;

  return (
    <div className="dashboard-page flex h-screen bg-[#F7F8FA] overflow-hidden">
      <aside className="h-screen w-[200px] min-w-[200px] border-r border-gray-100">
        <SideBar />
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
          <div>
            <h1 className="text-[18px] font-bold text-gray-900 tracking-tight">
              Welcome back, Kumar
            </h1>
            <p className="text-[12px] text-gray-400 mt-0.5">
              You have{" "}
              <span className="font-semibold text-gray-600">
                {totalCards - doneCards} tasks
              </span>{" "}
              in progress
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick stats */}
            <div className="hidden lg:flex items-center gap-3">
              {[
                { label: "Total", val: totalCards, color: "text-gray-700" },
                { label: "Done", val: doneCards, color: "text-emerald-600" },
                {
                  label: "Overdue",
                  val: 2,
                  color: "text-red-500",
                },
              ].map(({ label, val, color }) => (
                <div
                  key={label}
                  className="text-center bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-100"
                >
                  <div className={`text-[15px] font-bold ${color}`}>{val}</div>
                  <div className="text-[10px] text-gray-400 font-medium">{label}</div>
                </div>
              ))}
            </div>

            <div className="h-6 w-px bg-gray-200" />

            <div className="text-right">
              <span className="text-[13px] font-semibold text-gray-700">
                {formattedDate}
              </span>
            </div>

            {/* User avatar */}
            <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-[11px] font-bold shadow-sm">
              KR
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto px-8 py-6">
          <BoardView />
        </main>
      </div>
    </div>
  );
}
