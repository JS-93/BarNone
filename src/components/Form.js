import React, { useState } from "react";

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

    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDrink),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New drink added:", data);
      
        setFormData({ name: "",  
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
        imageUrl: "",});
      })
      .catch((error) => {
        console.error(`Error adding drinks: ${error}`);
      });
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
        </table>
        <button type="submit">Add Drink</button>
      </form>
    </div>
  );
};

export default Form;
