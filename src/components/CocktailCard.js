import { useState } from 'react'

const CocktailCard = ({cocktail}) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }


    const { strDrink, strDrinkThumb } = cocktail

    const ingredients = [];

for (let i=1; i<=15; i++) {
    const ingredient = cocktail[`strIngredient${i}`]
    const measure = cocktail[`strMeasure${i}`]

    if (ingredient) {
        ingredients.push({ingredient, measure})
    }
}

    return(<div className={`card ${isFlipped ? 'flipped' : ''}`}>
        
        
        <div className="card-front">
        <h3 >{strDrink}</h3>
        <img src={strDrinkThumb} alt={strDrink}/>
        <button className="flipButtonSearch" onClick={handleClick}>Flip For More Info</button>
        </div>
        <div className="card-back">
            <h3>{strDrink}</h3>
            <ul className="backText">
            {ingredients.map(({ ingredient, measure }, index) => (
        <li key={index}>
            {ingredient} - {measure}
        </li>
    ))}    
            </ul>
            <p className="backText">{cocktail.strInstructions}</p>
            <button className="flipButtonSearch" onClick={handleClick}>Flip Back</button>

        </div>
        </div>)
}


export default CocktailCard




