import "./Game.scss";
import React from "react";

const Game = (props) => {
  return (
    <div className="individual-game">
      <h5 className="game-title">{props.game.name}</h5>
      <img
        className="game-image"
        src={`assets/${props.game.image}`}
        alt={props.game.name}
      ></img>
      <h5 className="game-price">
        {props.game.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h5>
      <h5 className="game-score">Score: {props.game.score}</h5>
      <button className="add-btn" onClick={() => props.addCartItem(props.game)}>
        Adicionar ao carrinho
        <img
          className="cart-icon"
          src="assets/cart-icon.svg"
          alt="Cart Icon"
        ></img>
      </button>
    </div>
  );
};
export default Game;
