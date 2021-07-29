import "../App.scss";
import React from "react";

const Game = (props) => {
  return (
    <div>
      <h5>{props.name}</h5>
      <img src={`assets/${props.image}`}></img>
    </div>
  );
};
export default Game;
