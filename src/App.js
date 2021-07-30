import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import GameList from "./components/GameList";
import Cart from "./components/Cart";
import Games from "./products.json";
import Select from "react-select";

function App() {
  const options = [
    { value: "alphabet", label: "Ordem Alfabética" },
    { value: "price", label: "Preço(Crescente)" },
    { value: "score", label: "Pontuação(Decrescente)" },
  ];

  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState(options[0]);

  const addCartItem = (game) => {
    setCart(cart.concat(game));
    console.log(cart);
  };

  const removeCartItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const onFilterChange = (option) => {
    setFilter(option);
  };

  let filteredResults = Games;
  if (filter.value === "alphabet") {
    filteredResults = Games.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  if (filter.value === "price") {
    filteredResults = Games.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
  }
  if (filter.value === "score") {
    filteredResults = Games.sort(
      (a, b) => parseFloat(b.score) - parseFloat(a.score)
    );
  }

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
