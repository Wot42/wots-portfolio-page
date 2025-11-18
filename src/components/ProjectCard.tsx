import React, { useEffect, useState } from "react";
import "./css/ProjectCard.css";
import { ProjectData } from "utils/typesAndInterfaces";
import { AnimatePresence, motion } from "framer-motion";
import { Carousel } from "./Carousel";

interface props {
  projectColor: string;
  projectData: ProjectData;
}

const ProjectCard = ({ projectColor, projectData }: props) => {
  const [projectModelMode, setProjectModelMode] = useState(false);
  const cardAnimationVariants = {
    model: { zIndex: 210, transition: { delay: 0 } },
    card: { zIndex: 1, transition: { delay: 2 } },
  };

  // const modelMaskVariants = {
  //   in: { opacity: [0, 1], transition: { duration: 2 } },
  //   out: { opacity: [1, 0], transition: { duration: 2 } },
  // };
  const [projectCardInitial, setProjectCardInitial] = useState(true);

  useEffect(() => {
    if (projectModelMode) {
      document.documentElement.classList.add("project-card__modal-lock");
    } else {
      document.documentElement.classList.remove("project-card__modal-lock");
    }

    return () => {};
  }, [projectModelMode]);

  const addCardText = () => {
    const cardText: JSX.Element[] = [];

    if (projectModelMode) {
      if (projectCardInitial) {
        setProjectCardInitial(false);
      }
      projectData.info.forEach((cardInfo) => {
        cardText.push(<h3>{cardInfo.h3}</h3>);
        cardInfo.modelP.forEach((cardP) => {
          cardText.push(<p>{cardP}</p>);
        });
      });
      return (
        <motion.div
          key="modelText"
          className="project-card__model-text"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 1.25, duration: 0.75 },
          }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.75 } }}
        >
          {cardText}
        </motion.div>
      );
    } else {
      projectData.info.forEach((cardInfo) => {
        if (cardInfo.cardP.length > 0) {
          cardText.push(<h3>{cardInfo.h3}</h3>);
          cardInfo.cardP.forEach((cardP) => {
            cardText.push(<p>{cardP}</p>);
          });
        }
      });
      // cardText.push(
      //   <h4 className="project-card__more-info">Click here for more...</h4>
      // );
      if (projectCardInitial) {
        return (
          <motion.div
            key="cardText"
            exit={{ opacity: 0, scale: 0, transition: { duration: 0.75 } }}
          >
            {cardText}
          </motion.div>
        );
      }
      return (
        <motion.div
          key="cardText"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 1.25, duration: 0.75 },
          }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.75 } }}
        >
          {cardText}
        </motion.div>
      );
    }
  };

  const addLeftLower = () => {
    if (projectModelMode) {
      return (
        <motion.div
          key="modelLinks"
          className="project-card__model-links"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 1.25, duration: 0.75 },
          }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.75 } }}
        >
          <a href={projectData.links.git}>Github</a>
          {projectData.links.hosted !== "" && (
            <a href={projectData.links.hosted}>Site</a>
          )}
        </motion.div>
      );
    }
    if (projectCardInitial) {
      return (
        <motion.h4
          className="project-card__more-info"
          initial={{ opacity: 1, scale: 1, zIndex: 1 }}
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.75 } }}
        >
          Click here for more...
        </motion.h4>
      );
    }

    return (
      <motion.h4
        className="project-card__more-info"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 1.25, duration: 0.75 },
        }}
        exit={{ opacity: 0, scale: 0, transition: { duration: 0.75 } }}
      >
        Click here for more...
      </motion.h4>
    );
  };

  const projectOutput = () => {
    return (
      <React.Fragment>
        {projectModelMode && (
          <div className="projects-screen__project-card"></div>
        )}

        <motion.div
          data--project-card__modal-mask={projectModelMode}
          // variants={modelMaskVariants}
          // animate={projectModelMode ? "in" : "out"}
        >
          <AnimatePresence>
            {projectModelMode && (
              <motion.div
                className="project-card__model-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: [1, 0] }}
                transition={{ duration: 1, delay: 0.5 }}
                key="backdrop"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {projectModelMode && (
              <ModelExit setProjectModelMode={setProjectModelMode} key="exit" />
            )}
          </AnimatePresence>
          <motion.div
            layout
            className={
              projectColor +
              (projectModelMode
                ? " project-card__project-model"
                : " projects-screen__project-card") +
              " color__gold--text"
            }
            onClick={() => setProjectModelMode(true)}
            variants={cardAnimationVariants}
            // initial={projectModelMode ? "card" : "model"}
            animate={projectModelMode ? "model" : "card"}
            transition={{
              layout: { duration: 2 },
            }}
          >
            <div className="project-card__container  app__fancy-boarder">
              <motion.h2>{projectData.title}</motion.h2>
              <div
                className="project-card__horizontal-split"
                data--project-card__card-split-model={projectModelMode}
              >
                <motion.div
                  layout
                  variants={cardAnimationVariants}
                  animate={projectModelMode ? "model" : "card"}
                  transition={{ layout: { duration: 2 } }}
                  className="project-card__left"
                >
                  <Carousel
                    projectModelMode={projectModelMode}
                    imageList={projectData["images"]}
                    altList={projectData["altTexts"]}
                  />
                </motion.div>
                <motion.div
                  layout
                  variants={cardAnimationVariants}
                  animate={projectModelMode ? "model" : "card"}
                  transition={{ layout: { duration: 2 } }}
                  className="project-card__right"
                >
                  <AnimatePresence>
                    {addCardText()}
                    {addLeftLower()}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </React.Fragment>
    );
  };

  return <React.Fragment>{projectOutput()}</React.Fragment>;
};

const ModelExit = ({
  setProjectModelMode,
}: {
  setProjectModelMode: (value: React.SetStateAction<boolean>) => void;
}) => {
  // if (projectModelMode) {
  return (
    <motion.div
      className="projects-card__model-exit"
      onClick={() => setProjectModelMode(false)}
      initial={{ x: "12vw", y: "-12vw" }}
      animate={{ x: 0, y: 0 }}
      exit={{ x: "12vw", y: "-12vw", transition: { duration: 1, delay: 0.25 } }}
      transition={{ duration: 1 }}
    >
      X
    </motion.div>
  );
  // } else {
  //   return <React.Fragment></React.Fragment>;
  // }
};

export default ProjectCard;

//ratios.
// carosel is 1:1 in model or 16:9 (1.7778) (vertical 0.5625)in card. (set with data?)
// work out min and max look good ratiospaceing
// in model the carosell should be 100% to 75% height (maybe 70% for modal, 50% for card)  in vertical should be from 98% to 50% width
// text horizontal min ratio is 0.8423 or 1.187 dependin on direction.
// text horizontal max ratio (assuming no text scaleing) is 3.3297 or 0.2611 dependin on direction.
// text vertical card min ratio is 1.2856 or 0.7779 depending on direction.
// text vertical modal min- ratio is 3.8567 or 0.2593 depending on direction.

//given above, asumming height is 100 ignoring title, widths are:
// -card horizontal min= image: 88.89 (scale 0.5) text: 84.23.  total:173.12.  ratio with title if titel is 18 height: 1.4672
// -card horizontal turn= image: 177.78 (scale 1) text: 84.23.  total:262.01   ratio with title if titel is 18 height: 2.2205
// -card horizontal max= image: 177.78 (scale 1) text: 382.97.  total:560.75  ratio with title if titel is 18 height: 4.7524
// 2 to 1.6949  or 2 * 0.8475

// heights, assuming width is 100
// -card vertical min= image: 28.13 (scale 0.5) text: 77.79  total:105.92 ratio: 0.9442  ratio with title if titel is 18 height: 0.8002
// -card vertical turn= image: 56.25 (scale 1) text: 77.79  total:134.07 ratio: 0.7460  ratio with title if titel is 18 height: 0.6323
// -card vertical max= image: onwards?

// for modal
// -model horizontal min= image: 70 (scale 0.7) text: 84.23.  total: 154.23  ratio with title if titel is 18 height: 1.3071
// -model horizontal turn= image: 100 (scale 1) text: 84.23.  total: 184.23   ratio with title if titel is 18 height: 1.5613
// -model horizontal max= image: 100 (scale 1) text: 382.97.  total: 482.97  ratio with title if titel is 18 height: 4.0932
// 2 to 1.6949  or 2 * 0.8475

// -model vertical min= image: 50 (scale 0.5) text: 25.93  total:75.93 ratio: 1.317  ratio with title if titel is 18 height: 1.1162
// -model vertical turn= image: 100 (scale 1) text: 25.93  total:125.93 ratio: 0.7941  ratio with title if titel is 18 height: 0.6730
// -model vertical max= image: 100 (scale 1) text: 77.79  total:177.79 ratio: 0.5625  ratio with title if titel is 18 height: 0.4767

// phones  more 19:9  or 20:9 / 9:22 is largest ? 0.4 or 2.44 depending on orientation.
// model: ignor maxes. starting at 0.1 ad increasing. start vertical> shrink text box till turn> then shrink image till ver min (might want more for text growth?)> then turn to horizontal fixing text min to match ratios> grow image>grow text
// card: if ver then fixed ratio to fit text, aprox 0.6323 if hor then quad useing the guide. (shrink titel on card?)

// comon resalutions / model                          / card
// 16:9   1.7778    / hor sligtly over turn.              / quad, hor between min and turn, slightly closer to min
// 16:9   0.5625    / ver half way between turn and max  / list, ver, single ratio. if 9 wide is 14.2 tall, 0.8 screen
// 9:19.5  2.1667    / hor a bit over turn               / quad, hor between turn and max, slightly closer to turn
// 9:19.5  0.4615    / ver basicly max                  / list, ver, single ratio. if 9 wide is 14.2 tall, 0.73 screen
// 9:22   2.4444    / hor over turn half of max          / quad, hor between turn and max, basicly at max
// 9:22   0.4090    / ver over max...oh well              / list, ver, single ratio. if 9 wide is 14.2 tall, 0.64 screen

//info needed, is modal? screen ratio. (set there or get variables?),
// prob ratio first. container queries help?
// use @media (0< aspect-ratio <= 1)
// ratio points for cards, 1.46 and 2.22
// ratio points for modal, 0.67, 1.11, 1.5
// info needed, card with/height, left width, right width. (flex display for hor split)
// need to lock in tital first. put in box.?
// use container queiries but name queiry.

// TODO change background speed at 4k
// TODO fix zindex for when card is over header?
