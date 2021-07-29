import "../App.scss";
import React from "react";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";

const Game = (props) => {
  return (
    <div>
      <h5 className="game-title">{props.game.name}</h5>
      <img className="game-image" src={`assets/${props.game.image}`}></img>
      <h5 className="game-price">R${props.game.price}</h5>
      <h5>Score: {props.game.score}</h5>
      <button className="add-btn" onClick={() => props.addCartItem(props.game)}>
        Adicionar ao carrinho
        <img src="assets/cart-icon.svg"></img>
      </button>
      <a href=""></a>
    </div>
  );
};
export default Game;
