import React from "react";
import { DecoPattern } from "./DecoPattern";
//NOT IN INDEX YET
interface props {
  color: string;
}
export const BasicBox = ({ color }: props) => {
  return (
    <div className={`color__${color} box color__gold--text`}>
      <div className="boxAccent">
        <DecoPattern
          height={310}
          width={400}
          thickness={3}
          ratio={2}
          scale={20}
          color={color}
        />
      </div>
      <div className="boxText">
        {" "}
        <strong>
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text
        </strong>
      </div>
    </div>
  );
};
