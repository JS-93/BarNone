import React from "react";
import NewDrinkCard from "./NewDrinkCard";

const CreatedDrinks = ({addDrinks}) => {
  const showCreated = () => { addDrinks.map((cocktail)=>
<NewDrinkCard key={cocktail.id} cocktail={cocktail}/>)}

return (
  <>
      <h1>Created Drinks</h1>
      {showCreated()}
  </>
)
}


export default CreatedDrinks;