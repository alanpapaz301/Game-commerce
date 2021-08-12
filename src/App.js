import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import GameList from "./components/GameList/GameList";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setcartQuantity] = useState(0);

  const addCartItem = (game) => {
    if (cart.filter((c) => c.id === game.id).length === 0) {
      game.quantity = 1;
      setCart(cart.concat(game));
    } else {
      const index = cart.findIndex((item) => item.id === game.id);
      let cart2 = [...cart];
      cart2[index].quantity += 1;
      setCart(cart2);
    }
    setcartQuantity(cartQuantity + 1);
    alert("Item adicionado ao carrinho com sucesso!");
  };

  const removeCartItem = (index) => {
    let cart2 = [...cart];
    if (cart[index].quantity > 1) {
      cart2[index].quantity -= 1;
      setCart(cart2);
    } else {
      cart2.splice(index, 1);
      setCart(cart2);
    }
    setcartQuantity(cartQuantity - 1);
    alert("Item removido do carrinho");
  };

  return (
    <div className="App">
      <Router>
        <Nav cartItems={cartQuantity} />

        <Switch>
          <Route exact path="/">
            <GameList addCartItem={addCartItem} />
          </Route>
          <Route exact path="/Cart">
            <Cart cartItems={cart} removeCartItem={removeCartItem} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
