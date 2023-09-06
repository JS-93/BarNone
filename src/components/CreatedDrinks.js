import React from "react";
import NewDrinkCard from "./NewDrinkCard";




const CreatedDrinks = ({cocktails, onDelete}) => {

  const showCreated =  cocktails.map((cocktail)=> (
 <NewDrinkCard key={cocktail.id} cocktail={cocktail} onDelete={onDelete}/>))

return (<><h1>Your Drinks</h1>
  <div className='cardContainer'>
      {showCreated}
  </div></>
)
}


export default CreatedDrinks;
