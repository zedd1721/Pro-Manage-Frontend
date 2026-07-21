import "@/features/dashboard/dashboard.css";
import BoardView from "@/features/dashboard/components/BoardView";
import { SAMPLE_CARDS } from "@/features/dashboard/data/dashboardData";

function DashboardPage() {
  const today = new Date("2024-01-12");
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const totalCards = SAMPLE_CARDS.length;
  const doneCards = SAMPLE_CARDS.filter((card) => card.column === "done").length;

  return (
    <div className="dashboard-page flex h-full min-h-0 flex-col">
      <header className="-mx-6 -mt-6 border-b border-gray-100 bg-white px-6 py-4 md:-mx-8 md:-mt-8 md:px-8">
        <div className="flex w-full items-center justify-between gap-4">
          <div>
            <h1 className="text-[18px] font-bold tracking-tight text-gray-900">
              Welcome back, Kumar
            </h1>
            <p className="mt-0.5 text-[12px] text-gray-400">
              You have{" "}
              <span className="font-semibold text-gray-600">
                {totalCards - doneCards} tasks
              </span>{" "}
              in progress
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 lg:flex">
              {[
                { label: "Total", val: totalCards, color: "text-gray-700" },
                { label: "Done", val: doneCards, color: "text-emerald-600" },
                { label: "Overdue", val: 2, color: "text-red-500" },
              ].map(({ label, val, color }) => (
                <div
                  key={label}
                  className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5 text-center"
                >
                  <div className={`text-[15px] font-bold ${color}`}>{val}</div>
                  <div className="text-[10px] font-medium text-gray-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="h-6 w-px bg-gray-200" />

            <div className="text-right">
              <span className="text-[13px] font-semibold text-gray-700">
                {formattedDate}
              </span>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-[11px] font-bold text-white shadow-sm">
              KR
            </div>
          </div>
        </div>
      </header>

      <main className="kanban-scroll flex-1 overflow-auto pt-6">
        <div className="mx-auto h-full w-full max-w-[1380px]">
          <BoardView />
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
