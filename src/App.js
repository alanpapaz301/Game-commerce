import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import GameList from "./components/GameList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addCartItem = (game) => {
    setCart(cart.concat(game));
  };

  const removeCartItem = (index) => {
    let cart2 = [...cart];
    cart2.splice(index, 1);

    setCart(cart2);
  };

  return (
    <div className="App">
      <Router>
        <Nav cartItems={cart.length} />

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
