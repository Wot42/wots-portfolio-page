import React, { useState } from "react";
import "./css/Carousel.css";
import { motion } from "framer-motion";

export const Carousel = ({
  projectModelMode,
  // carouselId,
  imageList,
  altList,
}: {
  projectModelMode: boolean;
  // carouselId: string;
  imageList: string[];
  altList: string[];
}) => {
  // let imageList = ["0", "1", "2"]; // place holder should get from data. needs alt text too.
  // let altList = ["this is image 1", "wow image 2", "last one"];

  const coreListLength = imageList.length;

  interface CarouselCardInfo {
    imageIndex: number;
    cardImage: string;
    altText: string;
    lastPosition: number;
    currentPosition: number;
    zIndex: number;
  } //MOVE TO INTERFACES

  const generateCarouselCardInfo = () => {
    const newCarouselCardInfo: CarouselCardInfo[] = [];

    imageList.forEach((image, index) => {
      newCarouselCardInfo.push({
        imageIndex: index,
        cardImage: image,
        altText: altList[index],
        lastPosition: index,
        currentPosition: index,
        zIndex: 1,
      });
    });

    //second set off images to ensure scrolling correctly.
    imageList.forEach((image, index) => {
      newCarouselCardInfo.push({
        imageIndex: index - coreListLength,
        cardImage: image,
        altText: altList[index],
        lastPosition: index - coreListLength,
        currentPosition: index - coreListLength,
        zIndex: 1,
      });
    });

    return newCarouselCardInfo;
  };

  const [carouselCardInfo, setCarouselCardInfo] = useState(
    generateCarouselCardInfo
  );

  const changeOffset = (offset: number) => {
    if (projectModelMode) {
      let newCardsInfo: CarouselCardInfo[] = [];

      let lastPosition = 0;
      let currentPosition = 0;
      let zIndex = 1;

      carouselCardInfo.forEach((oldCardInfo) => {
        lastPosition = oldCardInfo.currentPosition;
        currentPosition = lastPosition + offset;
        zIndex = 1;

        if (currentPosition < -1 * coreListLength) {
          currentPosition += coreListLength * 2;
          zIndex = 0;
        } else if (currentPosition >= coreListLength) {
          currentPosition -= coreListLength * 2;
          zIndex = 0;
        }

        let newCardInfo: CarouselCardInfo = {
          imageIndex: oldCardInfo.imageIndex,
          cardImage: oldCardInfo.cardImage,
          altText: oldCardInfo.altText,
          lastPosition: lastPosition,
          currentPosition: currentPosition,
          zIndex: zIndex,
        };
        newCardsInfo.push(newCardInfo);
      });

      setCarouselCardInfo(newCardsInfo);
    }
  };

  const findCardOffset = (findNum: number, mainCardIndex: number) => {
    let cardOffset = mainCardIndex - findNum;
    if (cardOffset > 0) cardOffset -= coreListLength;

    return cardOffset;
  };

  const drawCards: () => [JSX.Element[], number] = () => {
    let newCarouselCards: JSX.Element[] = [];
    let mainCard = 0;
    carouselCardInfo.forEach((cardInfo) => {
      newCarouselCards.push(
        <CarouselCard
          key={"" + cardInfo.imageIndex}
          cardImage={cardInfo.cardImage}
          altText={cardInfo.altText}
          lastPosition={"" + cardInfo.lastPosition * -100 + "cqh"}
          currentPosition={"" + cardInfo.currentPosition * -100 + "cqh"}
          zIndex={cardInfo.zIndex}
        />
      );
      if (cardInfo.currentPosition === 0) {
        if (cardInfo.imageIndex < 0) {
          mainCard = cardInfo.imageIndex + coreListLength;
        } else {
          mainCard = cardInfo.imageIndex;
        }
      }
    });
    return [newCarouselCards, mainCard];
  }; // key dosen't have carosell name in it
  const drawThumbnails = () => {
    const thumbnailHolder: JSX.Element[] = [];
    imageList.forEach((thumbnail, thumbIndex) => {
      thumbnailHolder.push(
        <img
          className="carousel__thumbnail"
          src={thumbnail}
          alt={altList[thumbIndex]}
          onClick={() => changeOffset(findCardOffset(thumbIndex, mainCard))}
        />
      );
    });

    return thumbnailHolder;
  };

  const [carouselCards, mainCard] = drawCards();

  return (
    <React.Fragment>
      <motion.div
        className="carousel__container"
        data--carousel__modal-container={projectModelMode}
        layout
        transition={{ layout: { duration: 2 } }}
      >
        {
          <motion.div
            className="carousel__button-up"
            onClick={() => changeOffset(1)}
            layout
            transition={{ layout: { duration: 2 } }}
          >
            <CarouselArrowSVG />
          </motion.div>
        }

        {
          <motion.div
            className="carousel__button-down"
            layout
            onClick={() => changeOffset(-1)}
            transition={{ layout: { duration: 2 } }}
          >
            <CarouselArrowSVG />
          </motion.div>
        }

        {
          <motion.div
            className="carousel__thumbnails-container"
            layout
            transition={{ layout: { duration: 2 } }}
          >
            {drawThumbnails()}
          </motion.div>
        }
        {
          <motion.div
            className="carousel__text-box"
            layout
            transition={{ layout: { duration: 2 } }}
          >
            {/* <AnimatePresence> */}
            <CarouselText
              key={carouselCardInfo[mainCard].altText}
              altText={carouselCardInfo[mainCard].altText}
            />
            {/* </AnimatePresence> */}
          </motion.div>
        }

        {
          <motion.div
            className="carousel__picture-frame"
            layout
            transition={{ layout: { duration: 2 } }}
          >
            <div className="app__fancy-boarder"></div>
          </motion.div>
        }

        <motion.div
          className="carousel__frame"
          data--carousel__modal-frame={projectModelMode}
          layout
          transition={{ layout: { duration: 2 } }}
        >
          {carouselCards}
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}; // dose frame need to be component?

const CarouselCard = ({
  cardImage,
  lastPosition,
  currentPosition,
  zIndex,
  altText,
}: {
  cardImage: string;
  lastPosition: string;
  currentPosition: string;
  zIndex: number;
  altText: string;
}) => {
  return (
    <motion.div
      className={"carousel__card"}
      initial={{ y: lastPosition, zIndex: zIndex }}
      animate={{ y: currentPosition, zIndex: zIndex }}
      transition={{ duration: 0.5 }}
    >
      <img src={cardImage} alt={altText} />
    </motion.div>
  );
};

const CarouselArrowSVG = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMinYMin meet"
    >
      <polygon
        points="0,50 50,0 100,50 50,100"
        stroke-linecap="butt"
        fill="currentColor"
      />
      <polygon
        points="3,50 50,3 97,50 50,97"
        stroke-linecap="butt"
        fill="black"
      />
      <polygon
        points="25,50 50,25 75,50 50,75"
        stroke-linecap="butt"
        fill="currentColor"
      />
      <line
        x1="25"
        y1="25"
        x2="75"
        y2="75"
        stroke-linecap="butt"
        stroke="currentColor"
        strokeWidth="3"
      />
      <line
        x1="25"
        y1="75"
        x2="75"
        y2="25"
        stroke-linecap="butt"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
};

const CarouselText = ({ altText }: { altText: string }) => {
  return (
    <motion.p
      initial={{ y: "-5cqw" }}
      animate={{
        y: ["-5cqw", "0cqw"],
        transition: { duration: 1 },
      }}
      exit={{ y: "5cqw", transition: { duration: 1 } }}
    >
      {altText}
    </motion.p>
  );
};

//still to do
// DONE ISH sort text //done but need a first time exception for text
// DONE ISH check for other modes
// DONE ISH deal with z index and final times
// links on main card
// tidy.

// heights? in condensed view defined by width. and aspect ratio.
// 1 col in box, 1 box wide // set to width and aspect ratio(can be done with container units)
// 2 col in box, 1 box wide // set to width?
// 2 col in box, 2 box wide //
// model view hor
// model ver
//MASTER plan. set all to width but learn aspect ratio then adapt coloums and boxes to match.

// heights num condensed
// over all frame = is image aspect ratio.

// height num expanded. (iao = image aspect ratio)
// outer frame    /find.
// -inner frame    /new ratio based on padding for fancy and combined text and image ratio, //about 1.5cqw both sides...i think
// --image        /iao*width -- must use container info from outer frame to animate...I think.
// --text         /height is dependant on container width.
// -buttons       /size based on width,
// -thumbnails.     /based on thumbnail
// --each thumbnail. / width is 1/4 iao ish plus padding, height based off iao that.

// widths. if split or card left are containers.
// outer frame (add padding currently its 5cqw each side) 90cqw
// -inner frame (remove offsets for fancy. should be aprox 2cqw each side) 86cqw
// --image (remove above fancy offset again for inner gap) 82cqw
// --text (same as image) 82cqw
// -buttons ( will depend on how big i want them and how square. perhaps 20% of outer frame?) 18cqw
// -thumbnails (same as image if i want it to slide under image. 82cqw
// --each thumbnail (if we assume 4 is max and want all to have the matching spaceing idealy of 2cqw then we have 72 to spit between 4) 18 cqw

// height num expanded if iao = 16/9.
// outer frame    /(inner + 4 for fancy + buttons*2 + thumbnails + 3 spaceings? 114.2...cqw)
// -inner frame    /54.12 cqw
// --image        /46.12 cqw
// --text         /(guessing about double offset) 4cqw.
// -buttons       /(guess square) 18cqw (buttons bigger than thumbnails is wrong)
// -thumbnails.     /(based on thumbnail) 10.125cqw
// --each thumbnail. / 10.125cqw

// image amount.
// hex 3, mouse moveing, singel click, multi click
// switcher 3 or 4, general view and block a game, load a game page, log out for style change, vertical?
// pack tack 4, a general move, dificulty settings, reset, vertical
// leap block 4, a general move, dificulty settings, reset, vertical
