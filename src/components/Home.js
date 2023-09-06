import { Link } from "react-router-dom"
import { useEffect } from 'react'


const Home = () => {

useEffect(() => {
    const logo = document.querySelector(".logo")
    if (logo) {
        setTimeout(() => {
            logo.classList.add("logoHighlight")
        }, 1500)
    }
}, [])
    return (
        <div className="homepage">
        <h1 className="logo">barNone</h1>
        <p>A fun way to  
            <Link to="/search" style={{cursor: 'pointer'}}><span> DISCOVER </span></Link>
             new drinks and 
             <Link to="/form" style={{cursor: 'pointer'}}>
             <span> CREATE </span></Link> your own!</p>
        </div>
    )
}


export default Home
