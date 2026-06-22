import { useState } from "react";
import CommunicationTab from "@/features/teams/components/CommunicationTab";
import MembersTab from "@/features/teams/components/MembersTab";
import TeamsHeader from "@/features/teams/components/TeamsHeader";
import TeamsTabs from "@/features/teams/components/TeamsTabs";

function TeamsPage() {
  const [activeTab, setActiveTab] = useState("members");

  return (
    <div className="flex min-h-full flex-col">
      <TeamsHeader />

      <div className="flex flex-1 flex-col gap-6 py-6">
        <TeamsTabs active={activeTab} onChange={setActiveTab} />
        <div className="transition-opacity duration-150">
          {activeTab === "members" ? <MembersTab /> : <CommunicationTab />}
        </div>
      </div>
    </div>
  );
}

export default TeamsPage;
