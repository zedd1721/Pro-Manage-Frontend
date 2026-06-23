import { PROJECT_GRADIENTS } from "@/features/projects/data/projectsData";

export function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function getProjectGradient(index) {
  return PROJECT_GRADIENTS[index % PROJECT_GRADIENTS.length];
}
