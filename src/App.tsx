import React from "react";
import "./App.css";
import "./color.css";
import {
  Background,
  ContactScreen,
  Header,
  HomeScreen,
  ProjectsScreen,
  SkillsScreen,
} from "./components";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Background />
      <HomeScreen />
      <SkillsScreen />
      <ProjectsScreen />
      <ContactScreen />
    </React.Fragment>
  );
}

export default App;
