import React, { useState } from "react";


const NewDrinkCard = ({ cocktail, onDelete }) => {
  const [isFlipped, setIsFlipped] = useState(false);


  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

const deleteDrink = () => {

  fetch(`http://localhost:3000/createdDrinks/${cocktail.id}`, {
    method: "DELETE"})
    .then((r) => r.json())
    .then(() => onDelete(cocktail))
}

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

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      <div className="card-front">
        <h3 className="drinkName" >{name}</h3>
        <img src={imageUrl} alt={name} />
        <button className="flipButton" onClick={handleClick}>
          Flip For More Info
        </button>
        <button className="deleteButton" onClick={deleteDrink}>🗑️</button>
      </div>
      <div className="card-back">
        <div className="infoWrapper">
        <h3>{name}</h3>
        <ul className='backText'>
          {ingredients.map(({ ingredient, measure }, index) => (
            <li key={index}>
              {ingredient} - {measure}
            </li>
          ))}
        </ul>
        <p className='backText'>{directions}</p></div>
        <button className="flipButton" onClick={handleClick}>
          Flip Back
        </button>
          <button className="deleteButton" onClick={deleteDrink}>🗑️</button>  
      </div>
    </div>
  );
};

export default NewDrinkCard;
