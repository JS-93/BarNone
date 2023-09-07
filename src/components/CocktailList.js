import React from "react"
import CocktailCard from "./CocktailCard"

const CocktailList = ({ cocktails }) => {
const cocktailList = cocktails.map((cocktail) => (
    <CocktailCard
        key={cocktail.idDrink}
        cocktail={cocktail}/>
))

return <div className="searchCardContainer">{cocktailList}</div>
}

export default CocktailList
