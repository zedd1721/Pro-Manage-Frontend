import { AVATAR_COLORS } from "@/features/teams/data/teamsData";

export function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function getAvatarColor(id) {
  return AVATAR_COLORS[id % AVATAR_COLORS.length];
}
