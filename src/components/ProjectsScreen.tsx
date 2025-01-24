import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import "./css/ProjectsScreen.css";

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
          <div className="projects-screen__project-box color__gold--text color__red"></div>
          <div className="projects-screen__project-box color__gold--text color__blue"></div>
          <div className="projects-screen__project-box color__gold--text color__green"></div>
          <div className="projects-screen__project-box color__gold--text color__sepia"></div>
        </div>
      </div>
    </React.Fragment>
  );
};
