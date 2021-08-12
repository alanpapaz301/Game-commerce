import "./Cart.scss";
import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = (props) => {
  let values = { total: 0, frete: 0 };
  if (props.cartItems.length !== 0) {
    let items = 0;
    let frete = 0;
    props.cartItems.map((item) => (items += item.price * item.quantity));
    if (items >= 250) {
      frete = 0;
    } else {
      frete = props.cartItems.length * 10;
    }
    values = { items: items, frete: frete, total: items + frete };
  }

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
          <div className="order-summary">
            <h1>Resumo do pedido</h1>
            <h3>
              Preço dos items:{" "}
              {values.items.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h3>
            <h3>
              {values.frete === 0
                ? "Frete Grátis!"
                : `Frete: ${values.frete.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })} - 
                Faltam ${(250 - values.items).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })} para ganhar frete grátis!`}
            </h3>
            <h3>
              Total:{" "}
              {values.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h3>
            <Link to="/">
              <button className="return-btn" type="button">
                Voltar as compras
              </button>
            </Link>
            <button className="finish-btn" type="button">
              Finalizar compra
            </button>
          </div>
        </div>
      </>
    );
};
export default Cart;
