import CocktailList from "./CocktailList"

const Search = ({ handleSearch, handleChange, search, cocktails }) => {
    return (<>
    
       <form className="form" onSubmit={handleSearch}>
        <input className="text" value={search} onChange={handleChange} type="text"></input>
        <input className="button" type="submit" value="Search Cocktail"></input>
       </form>
       <div><CocktailList cocktails={cocktails}/></div>
       </>
    )
}

export default Search
