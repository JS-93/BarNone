import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newDrink = {
      strDrink: formData.name,
      strIngredient1: formData.ingredients,
    
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
      
        setFormData({ name: "", ingredients: "" });
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
        <label>
          Drink Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Ingredients:
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Drink</button>
      </form>
    </div>
  );
};

export default Form;
