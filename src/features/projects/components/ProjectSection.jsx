import ProjectCard from "@/features/projects/components/ProjectCard";

function ProjectSection({ title, subtitle, projects }) {
  return (
    <section className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-0.5">
        <h3 className="text-[16px] font-bold text-gray-900">{title}</h3>
        <p className="text-[12px] text-gray-400">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
