import React from "react";
//NOT IN INDEX YET
interface props {
  color: string;
}
export const BasicBox = ({ color }: props) => {
  return (
    <div className={`color__${color} box color__gold--text`}>
      <div className="boxAccent">
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
        <div className={`color__${color}--accent diamond`}></div>
      </div>
      <div className="boxText">
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text
      </div>
    </div>
  );
};
