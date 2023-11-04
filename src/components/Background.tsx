import React, { useEffect } from "react";
import "./css/Background.css";
import { useCanvas } from "../hooks/useCanvas";
import { Explode, Hex } from "../utils/hexClasses";

export const Background = () => {
  const rootThree = Math.sqrt(3); // needed for hexagon calculations
  const maxSize = 20; // the size of all hexagons
  const minSize = 0; // the minimum size of the highlight hexagons
  const maxMouseRadius = 60; // radius from the mouse where the highlights hexes are at their max
  const minMouseRadius = 200; // the radius from the mouse where the highlights hexes are at their min
  const hexColour = "rgb(0, 30, 100)"; // colour for the highlight hex
  const bgColour = "rgb(0, 12, 37)"; // colour for the background hex
  const spotLightColour = "rgb(210, 255, 255)";
  const spotDeepColour = "rgb(102, 255, 255)";
  const shrinkSpeed = 0.3; // the speed at which the highlight hexes shrink
  const growSpeed = 5; // the speed at which highlight hexes grow
  const explodeSpeed = 10; // speed of the explosion effect

  let hexArray: Hex[] = [];
  let bgArray: Hex[] = [];
  let explodeArray: Explode[] = [];
  let rowHex = 0;
  let columnHex = 0;

  let mouse = {
    x: 0,
    y: 0,
  };
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener("click", () =>
      explodeArray.push(
        new Explode(
          mouse.x,
          mouse.y,
          maxMouseRadius,
          explodeSpeed,
          spotLightColour,
          spotDeepColour
        )
      )
    );

    window.addEventListener("resize", setUp);
  });

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
        x = r * maxSize * 3 + (c % 2 === 0 ? 0 : maxSize * 1.5);
        y = (c * maxSize * rootThree) / 2;
        hexArray.push(
          new Hex(
            x,
            y,
            minSize,
            hexColour,
            maxSize,
            minSize,
            shrinkSpeed,
            growSpeed,
            maxMouseRadius,
            minMouseRadius,
            mouse
          )
        );
        bgArray.push(
          new Hex(
            x,
            y,
            maxSize - 1,
            bgColour,
            maxSize,
            minSize,
            shrinkSpeed,
            growSpeed,
            maxMouseRadius,
            minMouseRadius,
            mouse
          )
        );
      }
    }
  };
  setUp();

  const draw = (ctx: CanvasRenderingContext2D) => {};
  const drawHex = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < hexArray.length; i++) {
      hexArray[i].draw(ctx);
    }
  };
  const drawBackground = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < bgArray.length; i++) {
      bgArray[i].draw(ctx);
    }
  };
  const drawSpot = (ctx: CanvasRenderingContext2D) => {
    let grad = ctx.createRadialGradient(
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
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  };

  const animate = (ctx: CanvasRenderingContext2D) => {};
  const animateHex = (ctx: CanvasRenderingContext2D) => {
    const render = () => {
      // console.log("render");
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < hexArray.length; i++) {
        hexArray[i].update(ctx);
      }
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  };
  const animateSpot = (ctx: CanvasRenderingContext2D) => {
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (explodeArray.length > 0) {
        for (let i = explodeArray.length - 1; i >= 0; i--) {
          explodeArray[i].update(ctx);
          if (explodeArray[i].done) explodeArray.splice(i, 1);
        }
      }

      drawSpot(ctx);

      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  };

  const canvasSpot = useCanvas(draw, animateSpot);
  const canvasBackground = useCanvas(drawBackground, animate);
  const canvasHex = useCanvas(drawHex, animateHex);

  return (
    <React.Fragment>
      <canvas
        id="canvasSpot"
        ref={canvasSpot}
        width="1057"
        height="300"
      ></canvas>
      <canvas id="canvasBackground" ref={canvasBackground}></canvas>
      <canvas id="canvasHex" ref={canvasHex}></canvas>
    </React.Fragment>
  );
};
