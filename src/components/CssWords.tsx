import React from "react";
import "./css/CssWords.css";

export const CssWords = () => {
  const cssLetter = (letter: string) => {
    let output: JSX.Element = <div className="missing-letter"></div>;
    if (letter === "W") {
      output = (
        <div className="css-words__capital css-words__letter-wide">
          <div className="css-words__letter-w--diagonal-box css-words__letter-w--slash1">
            <div className="css-words__letter-w--back-slash color__logo-letter"></div>
          </div>
          <div className="css-words__letter-w--diagonal-box css-words__letter-w--slash2">
            <div className="css-words__letter-w--front-slash color__logo-letter"></div>
          </div>
          <div className="css-words__letter-w--diagonal-box css-words__letter-w--slash3">
            <div className="css-words__letter-w--back-slash color__logo-letter"></div>
          </div>
          <div className="css-words__letter-w--diagonal-box css-words__letter-w--slash4">
            <div className="css-words__letter-w--front-slash color__logo-letter"></div>
          </div>

          <div className="css-words__flex-row-between-start">
            <div className="css-words__letter--serif-vertical color__logo-letter">
              <div className="css-words__w-serif-big-l color__logo-background"></div>
              <div className="css-words__w-serif-nw color__logo-background"></div>
            </div>
            <div className="css-words__letter--serif-vertical color__logo-letter">
              <div className="css-words__w-serif-ne color__logo-background"></div>
              <div className="css-words__w-serif-nw color__logo-background"></div>
            </div>
            <div className="css-words__letter--serif-vertical color__logo-letter">
              <div className="css-words__w-serif-ne color__logo-background"></div>
              <div className="css-words__w-serif-big-r color__logo-background"></div>
            </div>
          </div>
          <div className="css-words__flex-row-evenly-end">
            <div className="css-words__letter--serif-vertical color__logo-letter">
              <div className="css-words__w-serif-se color__logo-background"></div>
              <div className="css-words__w-serif-sw color__logo-background"></div>
            </div>
            <div className="css-words__letter--serif-vertical color__logo-letter">
              <div className="css-words__w-serif-se color__logo-background"></div>
              <div className="css-words__w-serif-sw color__logo-background"></div>
            </div>
          </div>
        </div>
      );
    } else if (letter === "O") {
      output = (
        <div className="css-words__capital css-words__letter-square css-words__letter-spacing--capital">
          <div className="css-words__letter-o--outer-circle color__logo-letter">
            <div className="css-words__letter-o--inner-circle color__logo-background"></div>
          </div>
          <div className="css-words__letter-o--outer-triangle"></div>
          <div className="css-words__letter-o--inner-triangle"></div>
          <div className="css-words__letter-o--stem color__logo-letter"></div>
        </div>
      );
    } else if (letter === "T") {
      output = (
        <div className="css-words__capital css-words__letter-slim">
          <div className="css-words__flex-column-center-end">
            <div className="css-words__letter--serif-vertical color__logo-letter">
              <div className="css-words__serif-se color__logo-background"></div>
              <div className="css-words__serif-sw color__logo-background"></div>
            </div>
          </div>
          <div className="css-words__flex-column-center-end">
            <div className="css-words__letter--full-vertical color__logo-letter"></div>
          </div>
          <div className="css-words__flex-column-center-start">
            <div className="css-words__letter--full-horizontal color__logo-letter"></div>
          </div>
          <div className="css-words__flex-column-between-start">
            <div className="css-words__letter--serif-horizontal-half css-words__letter--serif-nudge-down color__logo-letter">
              <div className="css-words__serif-wn color__logo-background"></div>
            </div>
            <div className="css-words__letter--serif-horizontal-half css-words__letter--serif-nudge-down color__logo-letter">
              <div className="css-words__serif-en color__logo-background"></div>
            </div>
          </div>
        </div>
      );
    } else if (letter === "F") {
      output = (
        <div className="css-words__capital css-words__letter-slim">
          <div className="css-words__flex-column-start-end">
            <div className="css-words__letter--serif-vertical color__logo-letter">
              <div className="css-words__serif-se color__logo-background"></div>
              <div className="css-words__serif-sw color__logo-background"></div>
            </div>
          </div>
          <div className="css-words__flex-column-start-end">
            <div className="css-words__letter--full-vertical css-words__letter--serif-nudge-right color__logo-letter"></div>
          </div>
          <div className="css-words__flex-column-start-start">
            <div className="css-words__letter--three-quarters-horizontal-serif-gap css-words__letter--serif-nudge-right color__logo-letter"></div>
          </div>
          <div className="css-words__flex-column-between-start">
            <div className="css-words__letter--serif-vertical-half color__logo-letter">
              <div className="css-words__serif-ne color__logo-background"></div>
            </div>
            <div className="css-words__letter--serif-horizontal-half css-words__letter--serif-nudge-down color__logo-letter">
              <div className="css-words__serif-en color__logo-background"></div>
            </div>
          </div>

          <div className="css-words__flex-column-end-center">
            <div className="css-words__letter--serif-horizontal css-words__letter--serif-nudge-left color__logo-letter">
              <div className="css-words__serif-en color__logo-background"></div>
              <div className="css-words__serif-es color__logo-background"></div>
            </div>
          </div>
          <div className="css-words__flex-column-center-center">
            <div className="css-words__letter--three-quarters-horizontal-double-serif-gap color__logo-letter"></div>
          </div>
        </div>
      );
    } else if (letter === "a") {
      output = (
        <div className="css-words__lowercase css-words__letter-square">
          <div className="css-words__letter-lowercase--outer-circle color__logo-letter">
            <div className="css-words__letter-lowercase--inner-circle color__logo-background"></div>
          </div>
          <div className="css-words__flex-row-end-end">
            <div className="css-words__letter--serif-vertical-half color__logo-letter">
              <div className="css-words__serif-sw color__logo-background"></div>
            </div>
          </div>
          <div className="css-words__flex-row-end-end">
            <div className="css-words__letter--half-vertical color__logo-letter css-words__letter--serif-nudge-left"></div>
          </div>
        </div>
      );
    } else if (letter === "n") {
      output = (
        <div className="css-words__lowercase css-words__letter-square css-words__letter-spacing--lower">
          <div className="css-words__letter-lowercase--outer-circle color__logo-letter">
            <div className="css-words__letter-lowercase--inner-circle color__logo-background"></div>
          </div>
          <div className="css-words__letter-lowercase--half-circle color__logo-background"></div>

          <div className="css-words__flex-row-between-end">
            <div className="css-words__letter--serif-vertical color__logo-letter">
              <div className="css-words__serif-se color__logo-background"></div>
              <div className="css-words__serif-sw color__logo-background"></div>
            </div>
            <div className="css-words__letter--serif-vertical color__logo-letter">
              <div className="css-words__serif-se color__logo-background"></div>
              <div className="css-words__serif-sw color__logo-background"></div>
            </div>
          </div>
          <div className="css-words__flex-row-between-end">
            <div className="css-words__letter--full-vertical color__logo-letter css-words__letter--serif-nudge-right"></div>
            <div className="css-words__letter--half-vertical color__logo-letter css-words__letter--serif-nudge-left"></div>
          </div>
        </div>
      );
    } else if (letter === "r") {
      output = (
        <div className="css-words__lowercase css-words__letter-half css-words__letter-spacing--lower">
          <div className="css-words__letter-lowercase--outer-circle color__logo-letter">
            <div className="css-words__letter-lowercase--inner-circle color__logo-background"></div>
          </div>
          <div className="css-words__letter-lowercase--half-circle color__logo-background"></div>
          <div className="css-words__letter-lowercase--quarter-circle color__logo-background"></div>

          <div className="css-words__flex-row-start-end">
            <div className="css-words__letter--serif-vertical color__logo-letter">
              <div className="css-words__serif-se color__logo-background"></div>
              <div className="css-words__serif-sw color__logo-background"></div>
            </div>
          </div>
          <div className="css-words__flex-row-start-end">
            <div className="css-words__letter--full-vertical color__logo-letter css-words__letter--serif-nudge-right"></div>
          </div>
        </div>
      );
    }

    return output;
  };

  const cssWords = () => {
    const cssWot: JSX.Element = (
      <div className="css-words__name-plate--wot">
        {cssLetter("W")}
        {cssLetter("O")}
        {cssLetter("T")}
      </div>
    );
    const cssFanar: JSX.Element = (
      <div className="css-words__name-plate--fanar">
        {cssLetter("F")}
        {cssLetter("a")}
        {cssLetter("n")}
        {cssLetter("a")}
        {cssLetter("r")}
      </div>
    );
    return (
      <React.Fragment>
        {cssWot}
        {cssFanar}
      </React.Fragment>
    );
  };

  //only w added, No CSS, not sized properly yet

  return <React.Fragment>{cssWords()}</React.Fragment>;
};
