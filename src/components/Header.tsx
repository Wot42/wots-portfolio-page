import React from "react";
import "./css/Header.css";
import { HeaderButton } from "../mini-components";
import { DecoPattern } from ".";
import { PageType } from "utils/typesAndInterfaces";

interface props {
  currentPage: PageType;
}

export const Header = ({ currentPage }: props) => {
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
        <HeaderButton name="Home" current={currentPage} />
        <HeaderButton name="Skills" current={currentPage} />
        <HeaderButton name="Projects" current={currentPage} />
        <HeaderButton name="Contact" current={currentPage} />
      </ul>
    </nav>
  );
};

// Scroll set curent page.
