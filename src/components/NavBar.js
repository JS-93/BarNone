import { Link } from 'react-router-dom'

function NavBar() {
return (
    <nav className="nav">
       <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/form">Form</Link>
        <Link to="/search">Search</Link>
    
    </ul>
    
    </nav>
   
)

}

export default NavBar
