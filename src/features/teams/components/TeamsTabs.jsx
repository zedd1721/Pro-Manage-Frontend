import { MessageSquare, Users } from "lucide-react";

function TeamsTabs({ active, onChange }) {
  const tabs = [
    { id: "members", label: "Members", icon: Users },
    { id: "communication", label: "Communication", icon: MessageSquare },
  ];

  return (
    <div className="mt-6 flex w-fit items-center gap-1 rounded-xl border border-gray-100 bg-white p-1 shadow-sm">
      {tabs.map(({ id, label, icon: Icon }) => {
        const isActive = active === id;

        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-[13px] font-semibold transition-all ${
              isActive
                ? "bg-sky-100 text-sky-700 shadow-sm"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
            }`}
          >
            <Icon className="h-4 w-4" strokeWidth={isActive ? 2.2 : 1.8} />
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default TeamsTabs;
