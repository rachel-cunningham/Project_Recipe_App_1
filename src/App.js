import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  function deleteRecipe(indexToDelete){
    const newRecipes = recipes.filter((recipe, index) => index !== indexToDelete);
    setRecipes(newRecipes);
  }
  
function addRecipe(newRecipe) {
    setRecipes([
      ...recipes, newRecipe
    ]);
  }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div>
      <header><h1 className="App">Delicious Food Recipes</h1></header>
     <RecipeList recipes={recipes} setRecipes={setRecipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
