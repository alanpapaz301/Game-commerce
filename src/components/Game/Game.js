import "./Game.scss";
import React from "react";

const Game = (props) => {
  return (
    <div className="individual-game">
      <h5 className="game-title">{props.game.name}</h5>
      <img className="game-image" src={`assets/${props.game.image}`}></img>
      <h5 className="game-price">R${props.game.price}</h5>
      <h5>Score: {props.game.score}</h5>
      <button className="add-btn" onClick={() => props.addCartItem(props.game)}>
        Adicionar ao carrinho
        <img className="cart-icon" src="assets/cart-icon.svg"></img>
      </button>
    </div>
  );
};
export default Game;
