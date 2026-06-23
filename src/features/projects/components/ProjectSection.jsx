import ProjectCard from "@/features/projects/components/ProjectCard";

function ProjectSection({ title, subtitle, projects }) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-[22px] font-semibold tracking-tight text-slate-900">{title}</h3>
        <p className="text-[13px] text-slate-500">{subtitle}</p>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
