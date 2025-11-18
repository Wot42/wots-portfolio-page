import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import "./css/ProjectsScreen.css";
import ProjectCard from "./ProjectCard";
import { projectsCardData } from "data/projectCardData";

interface props {
  setOnScreen: React.Dispatch<React.SetStateAction<boolean>>;
  updateCurrentPage: () => void;
}

export const ProjectsScreen = ({ setOnScreen, updateCurrentPage }: props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setOnScreen(isInView);
    updateCurrentPage();
  }, [isInView, setOnScreen, updateCurrentPage]);

  return (
    <React.Fragment>
      <div className="projects-screen__main-container" id="Projects" ref={ref}>
        <h1>Projects</h1>
        <div className="projects-screen__quad-container">
          <ProjectCard
            projectColor="project-card__red"
            projectData={projectsCardData[1]}
          />
          <ProjectCard
            projectColor="project-card__blue"
            projectData={projectsCardData[2]}
          />
          <ProjectCard
            projectColor="project-card__green"
            projectData={projectsCardData[3]}
          />
          <ProjectCard
            projectColor="project-card__sepia"
            projectData={projectsCardData[4]}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
