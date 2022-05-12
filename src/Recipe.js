import React from "react";
import "./recipe-module.css";
import { Popup } from 'semantic-ui-react'

const Recipe = ({ title, dietLabels, healthLabels, calories, servings, source, image, ingredients, url }) => {

  console.log(healthLabels)
  let getDietLabels = [];
  dietLabels.map(dietLabel => (
    getDietLabels[0] = dietLabel
  ));

  let getHealthLabels = [];
  healthLabels.map(healthLabel => (
    getHealthLabels[0] = healthLabel
  ));

  if (getHealthLabels[0] === 'Alcohol-Free') {
    getHealthLabels.splice(0, 1);
  }

  var caloriesPerServing = Math.ceil(calories) / servings;
  return (
    <div class="ui card">
      <a class="recipe-image" href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} />
      </a>
      <div class="content">
        <a class="header" href={url} target="_blank" rel="noopener noreferrer">{title}</a>
        <div class="meta"><span>Calories per serving: {Math.ceil(caloriesPerServing)}</span></div>
        <a class="description">Recipe from: {source}</a>
      </div>
      <div class="extra content">
        {getDietLabels === undefined ? null : getDietLabels.length === 0 ? null : <h7 >{getDietLabels[0]}</h7>}
        {getHealthLabels === undefined ? null : getHealthLabels.length === 0 ? null : <h7 >{getHealthLabels[0]}</h7>}

      </div>
      <div>
        <Popup
          trigger={<div class="ui bottom attached button"><i class="add icon"></i>Preview Ingredients</div>}
          header="Ingredients"
          content={<ul className="ingredient">
            {ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
            ))}
          </ul>}
          basic
          on='click'
        />
      </div>
    </div >
  );
};

export default Recipe;
