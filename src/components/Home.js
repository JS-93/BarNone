import { Link } from "react-router-dom"



const Home = () => {

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
