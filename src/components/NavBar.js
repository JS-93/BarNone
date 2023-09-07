import { Link } from 'react-router-dom'

function NavBar() {
return (
    <nav className="nav">
       <ul>
        <Link to="/">Home</Link>
        <Link to="/about">Menu</Link>
        <Link to="/form">Create Drink</Link>
        <Link to="/search">Search Cocktail Ideas</Link>
    
    </ul>
    
    </nav>
   
)

}

export default NavBar
