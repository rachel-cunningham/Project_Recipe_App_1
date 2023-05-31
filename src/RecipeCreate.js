import React, { useState } from "react";
import "./App.css";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  // function Post

  const initialRecipeData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [customRecipeData, setCustomRecipeData] = useState(initialRecipeData);
  function handleInput(event) {
    setCustomRecipeData({
      ...customRecipeData,
      [event.target.name]: event.target.value,
    });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    addRecipe(customRecipeData);
    setCustomRecipeData({ ...initialRecipeData });
  }
  return (
    <form name="create" onSubmit={handleFormSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                value={customRecipeData.name}
                name="name"
                placeholder="Name"
                type="text"
                onChange={handleInput}
              />
            </td>
            <td>
              <input
                value={customRecipeData.cuisine}
                name="cuisine"
                placeholder="Cuisine"
                type="text"
                onChange={handleInput}
              />
            </td>
            <td>
              <input
                value={customRecipeData.photo}
                name="photo"
                placeholder="URL"
                type="text"
                onChange={handleInput}
              />
            </td>
            <td>
              <textarea
                value={customRecipeData.ingredients}
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleInput}
              />
            </td>
            <td>
              <textarea
                value={customRecipeData.preparation}
                name="preparation"
                placeholder="Preparation"
                onChange={handleInput}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
export default RecipeCreate;
