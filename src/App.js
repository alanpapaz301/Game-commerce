import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import GameList from "./components/GameList";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
      </Router>
      <GameList />
    </div>
  );
}

export default App;
