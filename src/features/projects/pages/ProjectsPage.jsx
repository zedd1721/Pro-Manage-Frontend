import { useState } from "react";
import CreateProjectCard from "@/features/projects/components/CreateProjectCard";
import CurrentProjectCard from "@/features/projects/components/CurrentProjectCard";
import ProjectSection from "@/features/projects/components/ProjectSection";
import ProjectsHeader from "@/features/projects/components/ProjectsHeader";
import {
  currentProject,
  joinedProjects,
  managedProjects,
} from "@/features/projects/data/projectsData";

function ProjectsPage() {
  const [joined] = useState(joinedProjects);
  const [managed] = useState(managedProjects);

  return (
    <div className="flex min-h-full flex-col">
      <ProjectsHeader
        totalProjects={joined.length + managed.length}
        currentProjectName={currentProject.name}
      />

      <div className="flex-1 overflow-auto pt-6">
        <div className="flex flex-col gap-7 pb-6">
          <CurrentProjectCard project={currentProject} />
          <CreateProjectCard />

          <ProjectSection
            title="Joined Projects"
            subtitle="Projects where you are a team member."
            projects={joined}
          />

          <ProjectSection
            title="Managed Projects"
            subtitle="Projects where you are the project manager."
            projects={managed}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
