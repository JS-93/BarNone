import CocktailList from "./CocktailList"




const Search = ({ handleSearch, handleChange, search, cocktails, searchMade }) => {
    
   
    
    return (<>
    <div className="searchBackground">
       <form className="searchBar" onSubmit={handleSearch}>
        <input className="searchInput" placeholder="Please enter a cocktail name..." value={search} onChange={handleChange} type="text"></input>
        <input className="searchButton" type="submit" value="Search Cocktail"></input>
       </form>
       <div className="searchCardContainer">
       {(searchMade && cocktails.length === 0) ? (<p>Please enter correct cocktail info</p>) : (<div><CocktailList cocktails={cocktails}/></div>)}
       </div>
       </div>
       </>
    )
}

export default Search
