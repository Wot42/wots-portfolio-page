import React, { useEffect, useRef } from "react";
import "./css/HomeScreen.css";
import { useInView } from "framer-motion";

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
        <strong>
          Wot <br /> Fanar
        </strong>
      </div>
      <div className="color__black home-screen__text-box  color__gold--text">
        <strong>
          Web developer
          <br />
          above name plate has no text and is made of pure css
        </strong>
      </div>
    </div>
  );
};
