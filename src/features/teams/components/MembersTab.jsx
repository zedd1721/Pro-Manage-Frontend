import { useState } from "react";
import AddMemberCard from "@/features/teams/components/AddMemberCard";
import MemberCard from "@/features/teams/components/MemberCard";
import RemoveMemberModal from "@/features/teams/components/RemoveMemberModal";
import { members } from "@/features/teams/data/teamsData";

function MembersTab() {
  const [memberList, setMemberList] = useState(members);
  const [memberToRemove, setMemberToRemove] = useState(null);

  function handleConfirmRemove() {
    if (!memberToRemove) {
      return;
    }

    setMemberList((current) =>
      current.filter((member) => member.id !== memberToRemove.id)
    );
    setMemberToRemove(null);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <AddMemberCard />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[16px] font-bold text-gray-900">Project Members</h3>
            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[12px] font-semibold text-gray-400">
              {memberList.length} members
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {memberList.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                index={index}
                onRemove={() => setMemberToRemove(member)}
              />
            ))}
          </div>
        </div>
      </div>
      <RemoveMemberModal
        open={Boolean(memberToRemove)}
        member={memberToRemove}
        onCancel={() => setMemberToRemove(null)}
        onConfirm={handleConfirmRemove}
      />
    </>
  );
}

export default MembersTab;
