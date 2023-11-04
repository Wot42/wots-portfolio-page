import { useRef, useEffect } from "react";

export const useCanvas = (
  draw: (ctx: CanvasRenderingContext2D) => void,
  animate: (ctx: CanvasRenderingContext2D) => void
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;

    draw(context);

    window.addEventListener(
      "resize", // will call setUp if window size changes
      function () {
        context.canvas.width = window.innerWidth;
        context.canvas.height = window.innerHeight;
        draw(context);
      }
    );

    animate(context);
  });

  return canvasRef;
};
