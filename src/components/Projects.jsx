import React from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="py-20 align-element" id="project">
      <SectionTitle text="Web Creations" />
      <div className="grid py-16 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
