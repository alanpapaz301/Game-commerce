import "./CartItem.scss";
import React from "react";

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <img
        className="cart-game-image"
        src={`assets/${props.game.image}`}
        alt={props.game.name}
      ></img>
      <div className="cart-item-info">
        <h5 className="cart-game-title">{props.game.name}</h5>

        <h5 className="cart-game-price">
          {props.game.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h5>
        <h5 className="cart-game-quantity">
          Quantidade: {props.game.quantity}
        </h5>
        <button
          className="remove-btn"
          onClick={() => props.removeCartItem(props.index)}
        >
          -
        </button>
      </div>
    </div>
  );
};
export default CartItem;
