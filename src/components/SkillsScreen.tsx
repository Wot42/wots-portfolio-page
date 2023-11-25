import React, { useEffect, useRef } from "react";
import "./css/SkillsScreen.css";
import { motion, useInView } from "framer-motion";

interface props {
  setOnScreen: React.Dispatch<React.SetStateAction<boolean>>;
  updateCurrentPage: () => void;
}

export const SkillsScreen = ({ setOnScreen, updateCurrentPage }: props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setOnScreen(isInView);
    updateCurrentPage();
  }, [isInView, setOnScreen, updateCurrentPage]);

  return (
    <div className="skills-screen__main-container" id="Skills" ref={ref}>
      <motion.div
        className="skills-screen__left-box color__gold--text color__sepia"
        // -x should be - the width of the box
        initial={{ x: -400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.div
        className="skills-screen__right-box color__gold--text color__sepia"
        // x should be the width of the box
        initial={{ x: 400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </div>
  );
};
