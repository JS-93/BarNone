import React from "react";
import NewDrinkCard from "./NewDrinknCard";

const CreatedDrinks = ({cocktails}) => {
  



  const showCreated =  cocktails.map((cocktail)=> (
 <NewDrinkCard key={cocktail.id} cocktail={cocktail}/>))

return (<><h1>Created Drinks</h1>
  <div className='cardContainer'>
      {showCreated}
  </div></>
)
}


export default CreatedDrinks;
