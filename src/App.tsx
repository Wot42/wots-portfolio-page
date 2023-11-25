import React, { useState } from "react";
import "./App.css";
import "./color.css";
import {
  // Background,
  BackgroundDeco,
  ContactScreen,
  Header,
  HomeScreen,
  ProjectsScreen,
  SkillsScreen,
} from "./components";
import { PageType } from "utils/typesAndInterfaces";

export const App = () => {
  const [homeOnScreen, setHomeOnScreen] = useState(false);
  const [skillsOnScreen, setSkillsOnScreen] = useState(false);
  const [projectsOnScreen, setProjectsOnScreen] = useState(false);
  const [contactOnScreen, setContactOnScreen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>("Home");

  const updateCurrentPage = () => {
    if (homeOnScreen) setCurrentPage("Home");
    else if (skillsOnScreen) setCurrentPage("Skills");
    else if (projectsOnScreen) setCurrentPage("Projects");
    else if (contactOnScreen) setCurrentPage("Contact");
  };

  return (
    <React.Fragment>
      <Header currentPage={currentPage} />
      <BackgroundDeco />
      <HomeScreen
        setOnScreen={setHomeOnScreen}
        updateCurrentPage={updateCurrentPage}
      />
      <SkillsScreen
        setOnScreen={setSkillsOnScreen}
        updateCurrentPage={updateCurrentPage}
      />
      <ProjectsScreen
        setOnScreen={setProjectsOnScreen}
        updateCurrentPage={updateCurrentPage}
      />
      <ContactScreen
        setOnScreen={setContactOnScreen}
        updateCurrentPage={updateCurrentPage}
      />
    </React.Fragment>
  );
};
