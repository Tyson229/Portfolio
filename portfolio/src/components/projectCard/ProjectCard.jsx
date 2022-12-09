const ProjectCard = ({ index, project }) => {
  return (
    <div className="w-full flex flex-col gap-3 p-10 mb-2 md:mb-0 bg-white/70 rounded">
      <div className="flex items-center gap-3">
        <div className="font-style text-6xl">{index}</div>
        <div className="flex flex-col">
          <div className="text-lg">{project.title}</div>
          <div className="text-black/50 text-sm">{project.sub}</div>
        </div>
      </div>
      <div className=" flex flex-col justify-center  gap-3">
        <div className="text-justify">{project.description}</div>
        <a className="underline" href={project.link} target="_">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
