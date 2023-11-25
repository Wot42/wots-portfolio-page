import React from "react";
import { PageType } from "utils/typesAndInterfaces";

interface props {
  name: PageType;
  current: PageType;
}

export const HeaderButton = ({ name, current }: props) => {
  return (
    <li className={name === current ? "active" : ""}>
      <div>{name}</div>
      <a href={`#${name}`}>{name}</a>
    </li>
  );
};
