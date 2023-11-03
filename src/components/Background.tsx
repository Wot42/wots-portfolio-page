import React from "react";
import "./css/Background.css";

export const Background = () => {
  return (
    <React.Fragment>
      <canvas id="canvasSpot" width="1057" height="300"></canvas>
      <canvas id="canvasBackground"></canvas>
      <canvas id="canvasHex"></canvas>
    </React.Fragment>
  );
};
