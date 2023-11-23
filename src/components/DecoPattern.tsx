import React from "react";

interface props {
  height: number;
  width: number;
  thickness: number;
  ratio: number;
  scale: number;
  color: string;
}

export const DecoPattern = ({
  height,
  width,
  thickness,
  ratio,
  scale,
  color,
}: props) => {
  const radiusX = scale;
  const radiusY = scale * ratio;
  const lengthHalf = Math.sqrt(
    (1 - (radiusY / 2) ** 2 / radiusY ** 2) * radiusX ** 2
  );
  const archHeight = Math.sqrt(
    (1 - (radiusX / 2) ** 2 / radiusX ** 2) * radiusY ** 2
  );
  const columns = Math.floor((height * 2) / radiusY) + 1;
  const rows = Math.floor(width / lengthHalf) + 2;
  const paths: JSX.Element[] = [];
  let strokeColor = "currentcolor";

  const drawLeaf = () => {
    for (let column = -1; column < columns; column++) {
      let startYTop = thickness / 2 + column * (radiusY / 2);
      let startYBottom = thickness / 2 + column * (radiusY / 2) + radiusY;

      for (let row = 0; row < rows; row++) {
        let startX = lengthHalf * 2 * row;
        if (column % 2 !== 0) {
          startX += lengthHalf;
        }
        paths.push(
          <path
            d={`M${startX},${startYTop}  a${radiusX},${radiusY} 0 0,1 ${lengthHalf},${
              radiusY / 2
            }`}
          />
        );
        paths.push(
          <path
            d={`M${startX},${startYTop}  a${radiusX},${radiusY} 0 0,0 -${lengthHalf},${
              radiusY / 2
            }`}
          />
        );
        paths.push(
          <path
            d={`M${startX},${startYBottom}  a${radiusX},${radiusY} 0 0,1 ${
              radiusX / 2
            },-${archHeight}`}
          />
        );
        paths.push(
          <path
            d={`M${startX},${startYBottom}  a${radiusX},${radiusY} 0 0,0 -${
              radiusX / 2
            },-${archHeight}`}
          />
        );
      }
    }

    return paths;
  };

  const makeSVG = () => {
    return (
      <svg height={`${height}`} width={`${width}`}>
        <g
          fill="none"
          stroke-width={`${thickness}`}
          stroke-linecap="butt"
          stroke={strokeColor}
        >
          {drawLeaf()}
        </g>
      </svg>
    );
  };

  return <React.Fragment>{makeSVG()}</React.Fragment>;
};
