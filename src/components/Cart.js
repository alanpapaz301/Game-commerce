import "../App.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    if (props.cartItems.length !== 0) {
      let total = 0;
      let frete = 0;
      props.cartItems.map((item) => (total += item.price));
      if (total >= 250) {
        frete = 0;
      } else {
        frete = props.cartItems.length * 10;
      }
      setValues({ total: total, frete: frete });
    }
  });

  if (props.cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Carrinho Vazio</h1>
      </div>
    );
  } else
    return (
      <>
        <h1 className="cart-title">Seu carrinho</h1>
        <div className="cart-container">
          <div className="cart-items">
            {props.cartItems.map((item, index) => (
              <div key={index}>
                <CartItem
                  game={item}
                  index={index}
                  removeCartItem={props.removeCartItem}
                />
              </div>
            ))}
          </div>
          <div>
            <h1>Resumo do pedido</h1>
            <h3>Preço dos items: R${values.total}</h3>
            <h3>Frete: R${values.frete}</h3>
            <h3>Total: R${values.frete + values.total}</h3>
            <Link to="/">
              <button className="return-btn" type="button">
                Voltar as compras
              </button>
            </Link>
          </div>
        </div>
      </>
    );
};
export default Cart;
