import "../App.scss";
import React from "react";

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <img className="cart-game-image" src={`assets/${props.game.image}`}></img>
      <div>
        <h5 className="cart-game-title">{props.game.name}</h5>

        <h5 className="cart-game-price">R${props.game.price}</h5>
        <button
          className="remove-btn"
          onClick={() => props.removeCartItem(props.game.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
};
export default CartItem;
