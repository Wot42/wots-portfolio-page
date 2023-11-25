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
    <div className="projects-screen__main-container" id="Projects" ref={ref}>
      <div className="projects-screen__project-box color__gold--text color__red"></div>
      <div className="projects-screen__project-box color__gold--text color__blue"></div>
      <div className="projects-screen__project-box color__gold--text color__green"></div>
      <div className="projects-screen__project-box color__gold--text color__sepia"></div>
    </div>
  );
};
