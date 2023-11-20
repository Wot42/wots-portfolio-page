import React from "react";

interface props {
  height: number;
  width: number;
  thickness: number;
  ratio: number;
  scale: number;
}

export const DecoPatternForBackground = ({
  height,
  width,
  thickness,
  ratio,
  scale,
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

  const leafSymbol = () => {
    let startYTop = thickness / 2;
    let startYBottom = thickness / 2 + radiusY;
    let startX = lengthHalf;
    return (
      <symbol id="leaf">
        <path
          d={`M${startX},${startYTop}  a${radiusX},${radiusY} 0 0,1 ${lengthHalf},${
            radiusY / 2
          }`}
        />

        <path
          d={`M${startX},${startYTop}  a${radiusX},${radiusY} 0 0,0 -${lengthHalf},${
            radiusY / 2
          }`}
        />

        <path
          d={`M${startX},${startYBottom}  a${radiusX},${radiusY} 0 0,1 ${
            radiusX / 2
          },-${archHeight}`}
        />

        <path
          d={`M${startX},${startYBottom}  a${radiusX},${radiusY} 0 0,0 -${
            radiusX / 2
          },-${archHeight}`}
        />
      </symbol>
    );
  };

  const drawLeafSymbols = () => {
    for (let column = -1; column < columns; column++) {
      let YPosition = column * (radiusY / 2);

      for (let row = 0; row < rows; row++) {
        let xPosition = lengthHalf * 2 * row;
        if (column % 2 !== 0) {
          xPosition -= lengthHalf;
        }

        paths.push(<use href="#leaf" x={xPosition} y={YPosition} />);
      }
    }

    return paths;
  };

  const makeSVG = () => {
    return (
      <svg height={`${height}`} width={`${width}`} id="background">
        <defs>
          {leafSymbol()}
          <mask id="mask-deco">
            <g fill="white">
              <rect height={`${height}`} width={`${width}`} />
            </g>

            <g
              fill="none"
              stroke-width={`${thickness}`}
              stroke-linecap="butt"
              stroke="black"
            >
              {drawLeafSymbols()}
            </g>
          </mask>
        </defs>

        <g fill="black" mask="url(#mask-deco)">
          <rect height={`${height}`} width={`${width}`} />
        </g>
      </svg>
    );
  };

  return <React.Fragment>{makeSVG()}</React.Fragment>;
};
