
import NewDrinkCard from "./NewDrinkCard";

const CreatedDrinks = ({cocktails, onDelete}) => {

  const showCreated =  cocktails.map((cocktail)=> (
 <NewDrinkCard key={cocktail.id} cocktail={cocktail} onDelete={onDelete}/>))

return (<><h1 className="yourDrinksHeader">Your Drinks</h1>
  <div className='cardContainer'>
      {showCreated}
  </div></>
)
}


export default CreatedDrinks;
