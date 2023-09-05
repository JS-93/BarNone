import CocktailList from "./CocktailList"




const Search = ({ handleSearch, handleChange, search, cocktails, searchMade }) => {
    
   
    
    return (<>
    
       <form className="form" onSubmit={handleSearch}>
        <input className="text" placeholder="Please enter a cocktail name..." value={search} onChange={handleChange} type="text"></input>
        <input className="button" type="submit" value="Search Cocktail"></input>
       </form>{(searchMade && cocktails.length === 0) ? (<p>Please enter correct cocktail info</p>) : (<div><CocktailList cocktails={cocktails}/></div>)}
       
       </>
    )
}

export default Search
