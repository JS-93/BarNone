import React, { useState } from "react";
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

  const [addDrink, setAddDrink] = useState([]);

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
      .then((data) => addNewDrink(data))
      .catch((error) => {
        console.error(`Error adding drinks: ${error}`);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="formDiv">
      <h1>Create Your Own Drink!</h1>
      <form onSubmit={handleFormSubmit} className="form">
      <table className="table">
        <tr className="tableRow">
          <td>
            <label>
             Drink Name:
            </label>
          </td>
          <td>
           <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          </td>
        </tr>
        <tr className="tableRow">
          <td>
            <label>
          ImageUrl:
          </label>
          </td>
          <td>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
          </td>
        </tr>
        <tr className="tableRow">
          <td>
            <label>
          Ingredient One:
          </label>
          </td>
          <td>
          <input
            type="text"
            name="ingredientOne"
            value={formData.ingredientOne}
            onChange={handleInputChange}
          />
         </td>
        </tr>
        <tr className="tableRow">
          <td>
            <label>
          Measurement One:
          </label>
          </td>
          <td>
          <input
            type="text"
            name="measurementOne"
            value={formData.measurementOne}
            onChange={handleInputChange}
          />
          </td>
        </tr>
        <tr className="tableRow">
          <td>
            <label>
          Ingredient Two:
          </label>
          </td>
          <td>
          <input
            type="text"
            name="ingredientTwo"
            value={formData.ingredientTwo}
            onChange={handleInputChange}
          />
            
         </td>
        </tr>
        <tr className="tableRow">
          <td>
            <label>
          Measurement Two:
          </label>
          </td>
          <td>
          <input
            type="text"
            name="measurementTwo"
            value={formData.measurementTwo}
            onChange={handleInputChange}
          />
            
          </td>
        </tr>
        <tr className="tableRow">
          <td>
            <label>
          Ingredient Three:
          </label>
          </td>
          <td>
          <input
            type="text"
            name="ingredientThree"
            value={formData.ingredientThree}
            onChange={handleInputChange}
          />
            
         </td>
        </tr>
        <tr className="tableRow">
          <td>
            <label>
          Measurement Three:
          </label>
          </td>
          <td>
          <input
            type="text"
            name="measurementThree"
            value={formData.measurementThree}
            onChange={handleInputChange}
          />
            
          </td>
        </tr>
        <tr className="tableRow">
          <td>
            <label>
          Ingredient Four:
          </label>
          </td>
          <td>
          <input
            type="text"
            name="ingredientFour"
            value={formData.ingredientFour}
            onChange={handleInputChange}
          />
            
         </td>
        </tr>
        <tr className="tableRow">
          <td>
            <label>
          Measurement Four:
          </label>
          </td>
          <td>
          <input
            type="text"
            name="measurementFour"
            value={formData.measurementFour}
            onChange={handleInputChange}
          />
            
          </td>
        </tr>
        <tr className="tableRow">
          <td>
            <label>
          Ingredient Five:
          </label>
          </td>
          <td>
          <input
            type="text"
            name="ingredientFive"
            value={formData.ingredientFive}
            onChange={handleInputChange}
          />
           
         </td>
        </tr>
        <tr className="tableRow">
          <td>
            <label>
          Measurement Five:
          </label>
          </td>
          <td>
          <input
            type="text"
            name="measurementFive"
            value={formData.measurementFive}
            onChange={handleInputChange}
          />
            
          </td>
        </tr>
        <tr className="tableRow">
          <td>
            <label>
          Directions:
          </label>
          </td>
          <td>
          <textarea
            name="directions"
            value={formData.directions}
            onChange={handleInputChange}
          />
            
          </td>
        </tr>
        
        </table>
        <button type="submit">Add Drink</button>
      </form>
      <CreatedDrinks/>
    </div>
  );
};

export default Form;
