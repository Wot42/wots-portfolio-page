import React from "react";
import "./css/HomeScreen.css";
import { BasicBox } from "./BasicBox";

export const HomeScreen = () => {
  return (
    <React.Fragment>
      <div className="box color__gold--name-plate">
        {" "}
        <div className="name">Wot Fanar</div>
      </div>
      <BasicBox color="black" />
      <BasicBox color="sepia" />
      <BasicBox color="red" />
      <BasicBox color="blue" />
      <BasicBox color="green" />
      <BasicBox color="turquoise" />
      <BasicBox color="purple" />
    </React.Fragment>
  );
};
