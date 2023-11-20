import React from "react";
import "./css/HomeScreen.css";
import { BasicBox } from "./BasicBox";
import { DecoPattern } from "./DecoPattern";

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
      <div className="box color__black">
        {/* <DecoPattern
          height={200}
          width={400}
          thickness={4}
          ratio={3}
          scale={40}
          color={"yellow"}
        /> */}
        <DecoPattern
          height={310}
          width={400}
          thickness={3}
          ratio={2}
          scale={20}
          color={"yellow"}
        />
      </div>
    </React.Fragment>
  );
};
