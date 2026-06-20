import "@/features/dashboard/dashboard.css";
import SideBar from "@/components/SideBar";
import BoardView from "@/features/dashboard/components/BoardView";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
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
    <div className="dashboard-page flex h-screen overflow-hidden bg-slate-100">
      <aside className="h-screen w-[200px] min-w-[200px] border-r border-gray-100">
        <SideBar />
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader
          formattedDate={formattedDate}
          totalCards={totalCards}
          doneCards={doneCards}
        />

        <main className="flex-1 overflow-auto px-6 py-6 xl:px-8">
          <div className="mx-auto h-full w-full max-w-[1380px]">
            <BoardView />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
