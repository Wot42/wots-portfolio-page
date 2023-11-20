import React from "react";
import "./App.css";
import "./color.css";
import {
  // Background,
  BackgroundDeco,
  // ContactScreen,
  Header,
  HomeScreen,
  // ProjectsScreen,
  // SkillsScreen,
} from "./components";

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <BackgroundDeco />
      <HomeScreen />
      {/* <SkillsScreen />
      <ProjectsScreen />
      <ContactScreen /> */}
    </React.Fragment>
  );
};
