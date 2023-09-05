import React from "react";

const CreatedDrinks = () => {
  const showCreated = () => { addDrinks.map((cocktail)=>
<NewDrinkCard key={cocktail.id} cocktail={cocktail}/>)}

return (
  <>
      <h1>Created Drinks</h1>
      {showCreated}
  </>
)
}


export default CreatedDrinks;
