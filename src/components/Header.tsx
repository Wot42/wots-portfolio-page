import React from "react";
import "./css/Header.css";
import { DecoPattern } from "./DecoPattern";
import { PageType } from "../utils/typesAndInterfaces";
import { HeaderButton } from "../features";

export const Header = () => {
  let current: PageType = "Home";

  return (
    <nav className="header color__header color__gold--text">
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

// rename error
// index properly
// color variables
// color svg by css
// Scrol set curent page.
