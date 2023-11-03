import { Explode, Hex } from "../utils/hexClasses";

export const useHex = () => {
  const bg = true; // enables the background hexes
  const exp = true; // enables the explode effect
  const sp = true; // enables the spot light effect
  const hexColour = "rgb(0, 30, 100)"; // colour for the highlight hex
  const bgColour = "rgb(0, 12, 37)"; // colour for the background hex
  const spotLightColour = "rgb(210, 255, 255)";
  const spotDeepColour = "rgb(102, 255, 255)";
  const explodeSpeed = 10; // speed of the explosion effect
  const maxSize = 20; // the size of all hexagons
  const minSize = 0; // the minimum size of the highlight hexagons
  const maxMouseRadius = 60; // radius from the mouse where the highlights hexes are at their max
  const minMouseRadius = 200; // the radius from the mouse where the highlights hexes are at their min
  const growSpeed = 5; // the speed at which highlight hexes grow
  const shrinkSpeed = 0.3; // the speed at which the highlight hexes shrink
  const rootThree = Math.sqrt(3); // needed for hexagon calculations

  let screenDiagonal = Math.sqrt(
    window.innerWidth * window.innerWidth +
      window.innerHeight * window.innerHeight
  );
  let rowHex = 0;
  let columnHex = 0;

  // canvas for the growing and shrinking lighter hexes
  const canvasHex = document.getElementById("canvasHex") as HTMLCanvasElement;
  const ctxH = canvasHex.getContext("2d") as CanvasRenderingContext2D;
  ctxH.canvas.width = window.innerWidth;
  ctxH.canvas.height = window.innerHeight;

  // canvas for the spot light and the exploding effect
  const canvasSpot = document.getElementById("canvasSpot") as HTMLCanvasElement;
  const ctxS = canvasSpot.getContext("2d") as CanvasRenderingContext2D;
  ctxS.canvas.width = window.innerWidth;
  ctxS.canvas.height = window.innerHeight;

  //canvas for the fixed hexagons in the background. doesn't update with animation.
  const canvasBackground = document.getElementById(
    "canvasBackground"
  ) as HTMLCanvasElement;
  const ctxB = canvasBackground.getContext("2d") as CanvasRenderingContext2D;
  ctxB.canvas.width = window.innerWidth;
  ctxB.canvas.height = window.innerHeight;

  // mouse position
  let mouse = {
    x: 0,
    y: 0,
  };
  window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  let hexArray: Hex[] = [];
  let bgArray: Hex[] = [];
  let explodeArray: Explode[] = [];

  // explode when click
  if (exp) {
    window.addEventListener("click", () =>
      explodeArray.push(new Explode(mouse.x, mouse.y))
    );
  }

  let drawSpot = () => {
    // draws to ctxS
    let grad = ctxS.createRadialGradient(
      mouse.x,
      mouse.y,
      0,
      mouse.x,
      mouse.y,
      (maxMouseRadius * 2) / 3
    );
    grad.addColorStop(0.2, spotLightColour);
    grad.addColorStop(0.7, spotDeepColour);
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctxS.fillStyle = grad;
    ctxS.fillRect(0, 0, window.innerWidth, window.innerHeight);
  };

  const setUp = () => {
    // resets arrays and draws all setup hex's
    hexArray = [];
    bgArray = [];
    explodeArray = [];
    rowHex = Math.floor(window.innerWidth / (maxSize * 3)) + 2;
    columnHex =
      Math.floor(window.innerHeight / ((maxSize * rootThree) / 2)) + 2;
    let x = 0;
    let y = 0;

    for (let r = 0; r < rowHex; r++) {
      for (let c = 0; c < columnHex; c++) {
        x = r * maxSize * 3 + (c % 2 == 0 ? 0 : maxSize * 1.5);
        y = (c * maxSize * rootThree) / 2;
        hexArray.push(new Hex(x, y, minSize, hexColour));
        if (bg) bgArray.push(new Hex(x, y, maxSize - 1, bgColour));
      }
    }

    if (bg) {
      for (let i = 0; i < bgArray.length; i++) {
        bgArray[i].drawBG();
      }
    }
  };

  const animate = () => {
    // calls all update functions

    ctxH.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctxS.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < hexArray.length; i++) {
      hexArray[i].update();
    }

    if (explodeArray.length > 0) {
      for (let i = explodeArray.length - 1; i >= 0; i--) {
        explodeArray[i].update();
        if (explodeArray[i].done) explodeArray.splice(i, 1);
      }
    }

    if (sp) drawSpot();

    requestAnimationFrame(animate);
  };

  window.addEventListener(
    "resize", // will call setUp if window size changes
    function () {
      ctxB.canvas.width = window.innerWidth;
      ctxB.canvas.height = window.innerHeight;
      ctxS.canvas.width = window.innerWidth;
      ctxS.canvas.height = window.innerHeight;
      ctxH.canvas.width = window.innerWidth;
      ctxH.canvas.height = window.innerHeight;

      setUp();
    }
  );

  return { setUp, animate };
};
