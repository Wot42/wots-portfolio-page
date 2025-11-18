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
        className="skills-screen__animation-box"
        // -x should be - the width of the box
        initial={{ x: "0vw" }}
        whileInView={{ x: "50vw" }}
        transition={{ duration: 1 }}
      >
        <div className="skills-screen__left-box color__gold--text color__sepia">
          <h2>Wot's Skills</h2>
          <p>Excellent problem solver</p>
          <p>Fast Learner</p>
          <p>Make reusable code</p>
          <p>Can priorities tasks</p>
          <p>Active communicator</p>
          <p>Clear explainer</p>
          <p>Supportive team member</p>
          <p>Engaged listener</p>
          <p>Confident to speak up</p>
          <p>Strong leader</p>
          <p>Responsible</p>
          <p>Punctual</p>
        </div>
      </motion.div>
      <motion.div
        className="skills-screen__animation-box"
        // x should be the width of the box
        initial={{ x: "0vw" }}
        whileInView={{ x: "-50vw" }}
        transition={{ duration: 1 }}
      >
        <div className="skills-screen__right-box color__gold--text color__sepia">
          <div className="skills-screen__logo-flex">
            <img
              className="skills-screen__logo"
              src="https://i.ibb.co/pBh4THfR/HTML5-logo-and-wordmark.png"
              alt="html"
            />
            <img
              className="skills-screen__logo"
              src="https://i.ibb.co/TxFSBm9J/css-3-seeklogo.png"
              alt="css"
            />
            <img
              className="skills-screen__logo"
              src="https://i.ibb.co/4nsBTjSq/javascript-js-seeklogo.png"
              alt="Javascript"
            />
            <img
              className="skills-screen__logo"
              src="https://i.ibb.co/4ZnmJXR9/typescript-seeklogo.png"
              alt="TypeScript"
            />

            <img
              className="skills-screen__logo"
              src="https://i.ibb.co/KcLSDT1D/python-seeklogo.png"
              alt="Python"
            />
            <img
              className="skills-screen__logo"
              src="https://i.ibb.co/TxTDcYz2/c-sharp-c-seeklogo.png"
              alt="C sharp"
            />
            <img
              className="skills-screen__logo"
              src="https://i.ibb.co/r2Wcc8RJ/ruby-seeklogo.png"
              alt="Ruby"
            />
            <img
              className="skills-screen__logo skills-screen__git"
              src="https://i.ibb.co/QFJ8JjpB/github-seeklogo.png"
              alt="Github"
            />

            <img
              className="skills-screen__logo"
              src="https://i.ibb.co/d41jrYd0/react-seeklogo.png"
              alt="React"
            />
            <img
              className="skills-screen__logo"
              src="https://i.ibb.co/DfF3zpmB/rails-seeklogo.png"
              alt="Ruby on Rails"
            />
            <img
              className="skills-screen__logo"
              src="https://i.ibb.co/jPQY6MjQ/unity-seeklogo.png"
              alt="Unity"
            />
            <img
              className="skills-screen__logo"
              src="https://i.ibb.co/HTzbPRL1/adobe-creative-cloud-cc-seeklogo.png"
              alt="Adobe Creative Suite"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
