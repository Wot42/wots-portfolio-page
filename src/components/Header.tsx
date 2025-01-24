import React, { useEffect, useState } from "react";
import "./css/Header.css";
import { HeaderButton } from "../mini-components";
import { DecoPattern } from ".";
import { PageType } from "utils/typesAndInterfaces";

interface props {
  currentPage: PageType;
}

export const Header = ({ currentPage }: props) => {
  const [headerSVG, setHeaderSVG] = useState(
    <DecoPattern
      height={window.innerHeight * 0.05}
      width={window.innerWidth}
      thickness={3}
      ratio={2}
      scale={20}
      color={"black"}
      key={"background-deco-pattern"}
    />
  );

  useEffect(() => {
    const resized = () => {
      setHeaderSVG(
        <DecoPattern
          height={window.innerHeight * 0.05}
          width={window.innerWidth}
          thickness={3}
          ratio={2}
          scale={20}
          color={"black"}
          key={"background-deco-pattern"}
        />
      );
    };
    window.addEventListener("resize", resized);
    return () => {
      window.removeEventListener("resize", resized);
    };
  });
  return (
    <nav className="header">
      {headerSVG}
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
