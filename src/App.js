import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
import { animateScroll as scroll } from 'react-scroll'

const App = () => {
  const APP_ID = "92c867da";
  const APP_KEY = "430b2e13b5f74eeda561b7536e06b5e6";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=25`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    setTimeout(() => { scroll.scrollTo(600); }, 1000);

  };

  return (
    <div class="App">
      <div class="search">
        <div id="cover">
          <form onSubmit={getSearch} method="get" action="">
            <div class="tb">
              <div class="td">
                <input type="text"
                  value={search}
                  onChange={updateSearch} placeholder="Search" required /></div>
              <div class="td" id="s-cover">
                <button type="submit">
                  <div id="s-circle"></div>
                  <span></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="cards" name="cards">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            dietLabels={recipe.recipe.dietLabels}
            healthLabels={recipe.recipe.healthLabels}
            calories={recipe.recipe.calories}
            servings={recipe.recipe.yield}
            source={recipe.recipe.source}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div >
  );
};

export default App;
