import React, { useEffect, useRef } from "react";
import "./css/HomeScreen.css";
import { useInView } from "framer-motion";
import { CssWords } from "./CssWords";

interface props {
  setOnScreen: React.Dispatch<React.SetStateAction<boolean>>;
  updateCurrentPage: () => void;
}

export const HomeScreen = ({ setOnScreen, updateCurrentPage }: props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setOnScreen(isInView);
    updateCurrentPage();
  }, [isInView, setOnScreen, updateCurrentPage]);

  return (
    <div className="home-screen__main-container" id="Home" ref={ref}>
      <div className="home-screen__name-plate">
        <CssWords />
      </div>
      <div className="home-screen__text-box app__fancy-boarder color__gold--text">
        <div className="home-screen__text-box--container">
          <h2>Full-Stack Web Developer</h2>
          <p>(The above name plate has no text and is made of pure css)</p>
        </div>
      </div>
    </div>
  );
};
