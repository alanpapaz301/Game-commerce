import "../App.scss";
import React from "react";
import Games from "../products.json";
import Game from "./Game";

const GameList = (props) => {
  return (
    <div className="games-container">
      {Games.map((game, index) => (
        <div key={index} className="gridElement">
          <Game name={game.name} image={game.image} />
        </div>
      ))}
    </div>
  );
};
export default GameList;
