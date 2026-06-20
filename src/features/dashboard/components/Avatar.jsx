import { AVATAR_COLORS } from "@/features/dashboard/data/dashboardData";

function Avatar({ initials, index }) {
  return (
    <div
      className={`h-6 w-6 rounded-full text-[9px] font-bold text-white ring-2 ring-white flex items-center justify-center ${
        AVATAR_COLORS[index % AVATAR_COLORS.length]
      }`}
    >
      {initials}
    </div>
  );
}

export default Avatar;
