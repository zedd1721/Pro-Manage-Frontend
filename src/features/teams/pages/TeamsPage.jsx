import { useState } from "react";
import CommunicationTab from "@/features/teams/components/CommunicationTab";
import MembersTab from "@/features/teams/components/MembersTab";
import TeamsHeader from "@/features/teams/components/TeamsHeader";
import TeamsTabs from "@/features/teams/components/TeamsTabs";

function TeamsPage() {
  const [activeTab, setActiveTab] = useState("members");

  return (
    <div className="flex h-full min-h-0 flex-col">
      <TeamsHeader />

      <div className="kanban-scroll -mx-6 min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-6 pt-6 md:-mx-8 md:px-8">
        <div className="flex flex-col gap-6 pb-6">
          <TeamsTabs active={activeTab} onChange={setActiveTab} />
          <div className="transition-opacity duration-150">
            {activeTab === "members" ? <MembersTab /> : <CommunicationTab />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamsPage;
