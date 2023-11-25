import React, { useEffect, useRef } from "react";
import "./css/ContactScreen.css";
import { motion, useInView } from "framer-motion";
import { DecoPattern } from "./DecoPattern";

interface props {
  setOnScreen: React.Dispatch<React.SetStateAction<boolean>>;
  updateCurrentPage: () => void;
}

export const ContactScreen = ({ setOnScreen, updateCurrentPage }: props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setOnScreen(isInView);
    updateCurrentPage();
  }, [isInView, setOnScreen, updateCurrentPage]);

  return (
    <div className="contact-screen__main-container" id="Contact" ref={ref}>
      {" "}
      <motion.div
        className={`color__purple contact-screen__card color__gold--text`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="boxAccent">
          <DecoPattern
            height={310}
            width={(2 * window.screen.width) / 3}
            thickness={3}
            ratio={2}
            scale={20}
            color={"purple"}
          />
        </div>
        <div className="boxText">
          {" "}
          <strong>
            Wot Fanar
            <br />
            Email: wotfanar.webdeveloper@gmail.com
            <br />
            Linked In: linkedin.com/in/wotfanar
            <br />
            Github: github.com/Wot42
            <br />
            CV: colour printer friendly
          </strong>
        </div>
      </motion.div>
    </div>
  );
};
