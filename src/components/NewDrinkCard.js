import React, { useState } from "react";

const NewDrinkCard = ({ cocktail, onDelete }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const {
    name,
    ingredientOne,
    measurementOne,
    ingredientTwo,
    measurementTwo,
    ingredientThree,
    measurementThree,
    ingredientFour,
    measurementFour,
    ingredientFive,
    measurementFive,
    directions,
    imageUrl,
  } = cocktail;

  const ingredients = [
    { ingredient: ingredientOne, measure: measurementOne },
    { ingredient: ingredientTwo, measure: measurementTwo },
    { ingredient: ingredientThree, measure: measurementThree },
    { ingredient: ingredientFour, measure: measurementFour },
    { ingredient: ingredientFive, measure: measurementFive },
  ];

  const handleDelete = () => {
    onDelete(cocktail);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      <div className="card-front">
        <h3>{name}</h3>
        <img src={imageUrl} alt={name} />
        <button className="flipButton" onClick={handleClick}>
          Flip For More Info
        </button>
        <button className="deleteButton" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <div className="card-back">
        <h3>{name}</h3>
        <ul>
          {ingredients.map(({ ingredient, measure }, index) => (
            <li key={index}>
              {ingredient} - {measure}
            </li>
          ))}
        </ul>
        <p>{directions}</p>
        <button className="flipButton" onClick={handleClick}>
          Flip Back
        </button>
      </div>
    </div>
  );
};

export default NewDrinkCard;
