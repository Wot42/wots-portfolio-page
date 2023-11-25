import React from "react";
import "./css/ProjectsScreen.css";

export const ProjectsScreen = () => {
  return (
    <div className="projects-screen__main-container" id="Projects">
      <div className="projects-screen__project-box color__gold--text color__red"></div>
      <div className="projects-screen__project-box color__gold--text color__blue"></div>
      <div className="projects-screen__project-box color__gold--text color__green"></div>
      <div className="projects-screen__project-box color__gold--text color__sepia"></div>
    </div>
  );
};
