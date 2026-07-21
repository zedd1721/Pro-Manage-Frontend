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
    <div className="flex h-full min-h-0 flex-col">
      <ProjectsHeader
        totalProjects={joined.length + managed.length}
        currentProjectName={currentProject.name}
      />

      <div className="kanban-scroll -mx-6 min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-6 pt-6 md:-mx-8 md:px-8">
        <div className="mx-auto flex w-full max-w-340 flex-col gap-8 pb-8">
          <section className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_420px] xl:items-start">
            <CurrentProjectCard project={currentProject} />
            <CreateProjectCard />
          </section>

          <section className="grid gap-8 xl:grid-cols-2 xl:items-start">
            <ProjectSection
              title="Managed Projects"
              subtitle="Projects where you are the project manager."
              projects={managed}
            />

            <ProjectSection
              title="Joined Projects"
              subtitle="Projects where you are a team member."
              projects={joined}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
