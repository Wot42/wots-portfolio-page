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
      <motion.div
        className={`color__purple contact-screen__card color__gold--text`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="boxAccent">
          <DecoPattern
            height={window.screen.height}
            width={window.screen.width}
            thickness={3}
            ratio={2}
            scale={20}
            color={"purple"}
          />
        </div>
        <div className="boxText">
          <h3>Wot Fanar</h3>
          Email:
          <br />
          <a href="mailto:wotfanar.webdeveloper@gmail.com">
            wotfanar.webdeveloper@gmail.com
          </a>
          <br />
          Linked In: <br />
          <a href="https://www.linkedin.com/in/wotfanar">
            linkedin.com/in/wotfanar
          </a>
          <br />
          Github: <br />
          <a href="https://github.com/Wot42">github.com/Wot42</a>
          <br />
          CV: <br />
          <a href="https://www.canva.com/design/DAFMyPJggtI/wLSyHZQkhZIreO9z3oypHQ/edit?utm_content=DAFMyPJggtI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
            link
          </a>
        </div>
      </motion.div>
    </div>
  );
};
