

const Search = ({ handleSearch, handleChange, search }) => {
    return (<>
    
       <form className="form" onSubmit={handleSearch}>
        <input className="text" value={search} onChange={handleChange} type="text"></input>
        <input className="button" type="submit" value="Search"></input>
       </form>
       </>
    )
}

export default Search
