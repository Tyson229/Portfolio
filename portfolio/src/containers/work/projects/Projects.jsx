import ProjectCard from "../../../components/projectCard/ProjectCard";
import TabBar from "../../../components/tabBar/TabBar";
import { projects } from "./data";
const Projects = () => {
  return (
    <div className="w-full flex flex-col">
      <TabBar name={"Projects"} />
      <div className="p-2 md:grid md:grid-cols-3 md:gap-2 flex-wrap">
        {projects.map((project, i) => {
          return <ProjectCard key={i} index={i + 1} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
