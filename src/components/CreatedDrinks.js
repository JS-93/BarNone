import React, { useState, useEffect } from "react";

const CreatedDrinks = () => {
  const [createdDrinks, setCreatedDrinks] = useState([]);

  useEffect(() => {
    fetch(``)
      .then((resp) => resp.json())
      .then((data) => {
        setCreatedDrinks(data.drinks);
      })
      .catch((error) => {
        console.error(`There seems to be a ${error}`);
      });
  }, []);

  return (
    <div>
      <h1>Created Drinks</h1>
      <ul>
        {createdDrinks.map((drink) => (
          <li key={drink.idDrink}>
            {}
            <p>Name: {drink.strDrink}</p>
            <p>Ingredients: {drink.strIngredient1}, {drink.strIngredient2}, ...</p>
            {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreatedDrinks;
