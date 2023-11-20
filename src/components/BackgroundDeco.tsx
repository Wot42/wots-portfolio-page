import React, { useEffect, useState } from "react";
import "./css/BackgroundDeco.css";
import { useCanvas } from "../hooks/useCanvas";
import { Explode } from "../utils/hexClasses";
import { DecoPatternForBackground } from "./DecoPatternForBackground";

export const BackgroundDeco = () => {
  //UPDATED
  const edgeColorBase = "rgb(162, 136, 52)"; // color for the lines between leaves
  const spotLightColor = "rgb(255, 255, 210)";
  const spotDeepColor = "rgb(255, 255, 102)";
  const maxMouseRadius = 40; // radius from the mouse for glow
  const explodeSpeed = 15; // speed of the explosion effect

  let explodeArray: Explode[] = [];

  let mouse = {
    x: 0,
    y: 0,
  };
  const [maskSVG, setMaskSVG] = useState(
    <DecoPatternForBackground
      height={window.innerHeight}
      width={window.innerWidth}
      thickness={3}
      ratio={2}
      scale={55}
    />
  );

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
          spotLightColor,
          spotDeepColor
        )
      )
    );

    window.addEventListener("resize", () => {
      setMaskSVG(
        <DecoPatternForBackground
          height={window.innerHeight}
          width={window.innerWidth}
          thickness={3}
          ratio={2}
          scale={55}
        />
      );
    });
  });

  const drawSpot = (ctx: CanvasRenderingContext2D) => {
    let grad = ctx.createRadialGradient(
      mouse.x,
      mouse.y,
      0,
      mouse.x,
      mouse.y,
      (maxMouseRadius * 2) / 3
    );
    grad.addColorStop(0.2, spotLightColor);
    grad.addColorStop(0.7, spotDeepColor);
    grad.addColorStop(1, edgeColorBase);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  };
  const animateSpot = (ctx: CanvasRenderingContext2D) => {
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      drawSpot(ctx);
      if (explodeArray.length > 0) {
        for (let i = explodeArray.length - 1; i >= 0; i--) {
          explodeArray[i].update(ctx);
          if (explodeArray[i].done) explodeArray.splice(i, 1);
        }
      }
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  };

  const canvasSpot = useCanvas(drawSpot, animateSpot);

  return (
    <React.Fragment>
      <canvas id="canvasSpot" ref={canvasSpot}></canvas>
      {maskSVG}
    </React.Fragment>
  );
};
