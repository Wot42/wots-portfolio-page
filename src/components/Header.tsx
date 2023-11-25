import React from "react";
import "./css/Header.css";
import { HeaderButton } from "../mini-components";
import { DecoPattern } from ".";
import { PageType } from "utils/typesAndInterfaces";

export const Header = () => {
  let current: PageType = "Home";

  return (
    <nav className="header">
      <DecoPattern
        height={window.innerHeight * 0.04}
        width={window.innerWidth}
        thickness={3}
        ratio={2}
        scale={20}
        color={"black"}
      />
      <ul>
        <HeaderButton name="Home" current={current} />
        <HeaderButton name="Skills" current={current} />
        <HeaderButton name="Projects" current={current} />
        <HeaderButton name="Contact" current={current} />
      </ul>
    </nav>
  );
};

// Scroll set curent page.
