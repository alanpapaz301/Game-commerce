import "../App.scss";
import React, { useState, useEffect } from "react";
import Select from "react-select";

import Games from "../products.json";
import Game from "./Game";

const GameList = (props) => {
  const options = [
    { value: "alphabet", label: "Alfabética" },
    { value: "price", label: "Preço(Crescente)" },
    { value: "score", label: "Pontuação(Decrescente)" },
  ];
  const [filter, setFilter] = useState(options[0]);

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
    <>
      <div className="filter">
        <label>Filtro</label>
        <Select
          className="filter-select"
          onChange={onFilterChange}
          options={options}
          defaultValue={options[0]}
          isSearchable={false}
        />
      </div>
      <div className="games-container">
        {filteredResults.map((game, index) => (
          <div key={index} className="gridElement">
            <Game game={game} addCartItem={props.addCartItem} />
          </div>
        ))}
      </div>
    </>
  );
};
export default GameList;
