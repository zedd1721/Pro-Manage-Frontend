import { Plus } from "lucide-react";
import { useState } from "react";
import AddUserToGroupModal from "@/features/teams/components/AddUserToGroupModal";
import ChatWindow from "@/features/teams/components/ChatWindow";
import CreateGroupModal from "@/features/teams/components/CreateGroupModal";
import DirectMessageCard from "@/features/teams/components/DirectMessageCard";
import GroupCard from "@/features/teams/components/GroupCard";
import {
  directMessages,
  dmChats,
  groupChats,
  groupMembers,
  groups,
} from "@/features/teams/data/teamsData";

function CommunicationTab() {
  const [activeChat, setActiveChat] = useState(null);
  const [groupList, setGroupList] = useState(groups);
  const [dmMessages, setDmMessages] = useState(dmChats);
  const [grpMessages, setGrpMessages] = useState(groupChats);
  const [grpMembers, setGrpMembers] = useState(groupMembers);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showCreateGroup, setShowCreateGroup] = useState(false);

  function now() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function sendDM(id, text, replyTo) {
    setDmMessages((current) => ({
      ...current,
      [id]: [
        ...(current[id] ?? []),
        { id: Date.now(), senderId: 0, text, time: now(), replyTo: replyTo ?? null },
      ],
    }));
  }

  function sendGroup(id, text, replyTo) {
    setGrpMessages((current) => ({
      ...current,
      [id]: [
        ...(current[id] ?? []),
        { id: Date.now(), senderId: 0, text, time: now(), replyTo: replyTo ?? null },
      ],
    }));
  }

  function deleteDMMessage(chatId, messageId) {
    setDmMessages((current) => ({
      ...current,
      [chatId]: (current[chatId] ?? []).filter((message) => message.id !== messageId),
    }));
  }

  function deleteGroupMessage(chatId, messageId) {
    setGrpMessages((current) => ({
      ...current,
      [chatId]: (current[chatId] ?? []).filter((message) => message.id !== messageId),
    }));
  }

  function addUserToGroup(groupId, user) {
    setGrpMembers((current) => ({
      ...current,
      [groupId]: [...(current[groupId] ?? []), user],
    }));
  }

  function createGroup({ name, description, members: selectedMembers }) {
    const nextId = Math.max(...groupList.map((group) => group.id)) + 1;
    const createdMembers = [
      { id: 0, name: "You", role: "Team Member", status: "Online" },
      ...selectedMembers.map((member) => ({
        id: member.id,
        name: member.name,
        role: member.role,
        status: member.status,
      })),
    ];

    setGroupList((current) => [
      ...current,
      {
        id: nextId,
        name,
        description,
        membersCount: createdMembers.length,
      },
    ]);
    setGrpMembers((current) => ({
      ...current,
      [nextId]: createdMembers,
    }));
    setGrpMessages((current) => ({
      ...current,
      [nextId]: [],
    }));
  }

  if (activeChat?.type === "dm") {
    const directMessage = directMessages.find((message) => message.id === activeChat.id);

    if (!directMessage) {
      return null;
    }

    return (
      <ChatWindow
        type="dm"
        id={directMessage.id}
        name={directMessage.name}
        status={directMessage.status}
        messages={dmMessages[directMessage.id] ?? []}
        onSend={(text, replyTo) => sendDM(directMessage.id, text, replyTo)}
        onDeleteMessage={(messageId) => deleteDMMessage(directMessage.id, messageId)}
        onBack={() => setActiveChat(null)}
      />
    );
  }

  if (activeChat?.type === "group") {
    const group = groupList.find((item) => item.id === activeChat.id);

    if (!group) {
      return null;
    }

    const membersInGroup = grpMembers[group.id] ?? [];

    return (
      <>
        <ChatWindow
          type="group"
          id={group.id}
          name={group.name}
          groupMembers={membersInGroup}
          messages={grpMessages[group.id] ?? []}
          onSend={(text, replyTo) => sendGroup(group.id, text, replyTo)}
          onDeleteMessage={(messageId) => deleteGroupMessage(group.id, messageId)}
          onBack={() => setActiveChat(null)}
          onAddUser={() => setShowAddUser(true)}
        />
        {showAddUser ? (
          <AddUserToGroupModal
            groupName={group.name}
            existingIds={membersInGroup.map((member) => member.id)}
            onAdd={(user) => addUserToGroup(group.id, user)}
            onClose={() => setShowAddUser(false)}
          />
        ) : null}
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-gray-900">Direct Messages</h3>
          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[12px] font-semibold text-gray-400">
            {directMessages.length} contacts
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {directMessages.map((message, index) => (
            <DirectMessageCard
              key={message.id}
              message={message}
              index={index}
              onOpen={() => setActiveChat({ type: "dm", id: message.id })}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-gray-900">Groups</h3>
          <button
            type="button"
            onClick={() => setShowCreateGroup(true)}
            className="flex items-center gap-1.5 rounded-lg bg-sky-500 px-3 py-1.5 text-[12px] font-semibold text-white shadow-sm transition-colors hover:bg-sky-600"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={2.2} />
            Create Group
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {groupList.map((group, index) => (
            <GroupCard
              key={group.id}
              group={group}
              index={index}
              onOpen={() => setActiveChat({ type: "group", id: group.id })}
            />
          ))}
        </div>
      </div>

      {showCreateGroup ? (
        <CreateGroupModal
          onClose={() => setShowCreateGroup(false)}
          onCreate={createGroup}
        />
      ) : null}
    </div>
  );
}

export default CommunicationTab;
