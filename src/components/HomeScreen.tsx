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
      <div className="box color__gold--name-plate">
        <div className="name">Wot Fanar</div>
      </div>
      <div className="color__black home-screen__text-box  color__gold--text">
        Text
      </div>
    </div>
  );
};
