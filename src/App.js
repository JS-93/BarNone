import NavBar from "./components/NavBar";
import Form from "./components/Form";
import About from "./components/About";
import Home from "./components/Home";
import Search from "./components/Search";
import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'



function App() {
  const [cocktails, setCocktails] = useState([])
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then(resp => resp.json())
    .then(json => {
      setCocktails(json)
      console.log(json)
    })
    .catch((error) => {
      console.error(`There seems to be a ${error}`)
    })
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }


  return (<>
    <NavBar/>
    <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/search" element={<Search
          handleSearch={handleSearch}
          handleChange={handleChange}
          search={search}
          cocktails={cocktails}
          
          
          />}/>
          <Route path="/form" element={<Form/>}/>
        </Routes>
    </div></>
  );
}

export default App;
