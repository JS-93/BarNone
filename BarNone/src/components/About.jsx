import { useState, useEffect } from 'react'
import Menu from './Menu'


const About = () => {
    const [cocktails, setCocktails] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/createdDrinks')
        .then(resp => resp.json())
        .then(setCocktails)

    }, [])
    
    return (
        <div className="background">
        <div className="menuContainer">
            <u><h3 className="menuTitle">Drink Menu</h3></u>
            <Menu cocktails={cocktails}/>

        </div>
        </div>
        
    )
}

export default About
