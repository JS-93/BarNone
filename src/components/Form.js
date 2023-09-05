import React, { useState, useEffect } from "react";
import CreatedDrinks from "./CreatedDrinks";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    ingredientOne: "",
    measurementOne: "",
    ingredientTwo: "",
    measurementTwo: "",
    ingredientThree: "",
    measurementThree: "",
    ingredientFour: "",
    measurementFour: "",
    ingredientFive: "",
    measurementFive: "",
    directions: "",
    imageUrl: "",
  });
  const [getCocktails, setGetCocktails] = useState(true) //state to trigger refetching of cocktails after submitting the form
  const [addDrink, setAddDrink] = useState([]); //state to manage adding a drink when the db.json file is empty
  const [cocktails, setCocktails] = useState([])    //state to manage the new cocktails being created
  



 
  useEffect(() => {             
  if (getCocktails) {
      fetch('http://localhost:3000/createdDrinks')
      .then(resp => resp.json())
      .then(setCocktails)
      setGetCocktails(false)}   //setting getCocktails to false will prevent continous fetching, avoiding an infinite loop
  }, [getCocktails])



function addNewDrink (newDrink) {
  setAddDrink([...addDrink, newDrink])
}

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newDrink = {
      name: formData.name,
      ingredientOne: formData.ingredientOne, 
      measurementOne: formData.measurementOne,
      ingredientTwo: formData.ingredientTwo, 
      measurementTwo: formData.measurementTwo, 
      ingredientThree: formData.ingredientThree, 
      measurementThree: formData.measurementThree, 
      ingredientFour: formData.ingredientFour,
      measurementFour: formData.measurementFour,
      ingredientFive: formData.ingredientFive,
      measurementFive: formData.measurementFive,
      directions: formData.directions,
      imageUrl: formData.imageUrl,
    };

    fetch("http://localhost:3000/createdDrinks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDrink),
    })
      .then((response) => response.json())
      .then((data) => {
      addNewDrink(data);
      setGetCocktails(true) //setting getCocktails to true will trigger re-fetch to immediately render updated cocktail data
  })
      .catch((error) => {
        console.error(`Error adding drinks: ${error}`);
        
      });
      setFormData({ //resetting form after submission
        name: "",
        ingredientOne: "",
        measurementOne: "",
        ingredientTwo: "",
        measurementTwo: "",
        ingredientThree: "",
        measurementThree: "",
        ingredientFour: "",
        measurementFour: "",
        ingredientFive: "",
        measurementFive: "",
        directions: "",
        imageUrl: "",
      })
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleFormSubmit}>
      <table>
        <tbody>
        <tr>
          <td>
            <label>
             Drink Name:
            </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          </td>
        </tr>
        <tr>
          <td>
            <label>
          Ingredient One:
          <textarea
            name="ingredientOne"
            value={formData.ingredientOne}
            onChange={handleInputChange}
          />
            </label>
         </td>
        </tr>
        <tr>
          <td>
            <label>
          Measurement One:
          <textarea
            name="measurementOne"
            value={formData.measurementOne}
            onChange={handleInputChange}
          />
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label>
          Ingredient Two:
          <textarea
            name="ingredientTwo"
            value={formData.ingredientTwo}
            onChange={handleInputChange}
          />
            </label>
         </td>
        </tr>
        <tr>
          <td>
            <label>
          Measurement Two:
          <textarea
            name="measurementTwo"
            value={formData.measurementTwo}
            onChange={handleInputChange}
          />
            </label>
          </td>
        </tr>
         <tr>
          <td>
            <label>
          Ingredient Three:
          <textarea
            name="ingredientThree"
            value={formData.ingredientThree}
            onChange={handleInputChange}
          />
            </label>
         </td>
        </tr>
        <tr>
          <td>
            <label>
          Measurement Three:
          <textarea
            name="measurementThree"
            value={formData.measurementThree}
            onChange={handleInputChange}
          />
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label>
          Ingredient Four:
          <textarea
            name="ingredientFour"
            value={formData.ingredientFour}
            onChange={handleInputChange}
          />
            </label>
         </td>
        </tr>
        <tr>
          <td>
            <label>
          Measurement Four:
          <textarea
            name="measurementFour"
            value={formData.measurementFour}
            onChange={handleInputChange}
          />
            </label>
          </td>
        </tr><tr>
          <td>
            <label>
          Ingredient Five:
          <textarea
            name="ingredientFive"
            value={formData.ingredientFive}
            onChange={handleInputChange}
          />
            </label>
         </td>
        </tr>
        <tr>
          <td>
            <label>
          Measurement Five:
          <textarea
            name="measurementFive"
            value={formData.measurementFive}
            onChange={handleInputChange}
          />
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label>
          Directions:
          <textarea
            name="directions"
            value={formData.directions}
            onChange={handleInputChange}
          />
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label>
          ImageUrl:
          <textarea
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
            </label>
          </td>
        </tr>
        </tbody>
        </table>
        <button type="submit">Add Drink</button>
      </form>
      <CreatedDrinks cocktails={cocktails}/>
    </div>
  );
};

export default Form;
