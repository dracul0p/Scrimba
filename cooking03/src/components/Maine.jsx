import React, { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";

import { getRecipeFromMistral } from "../ai.js";

// console.log(import.meta.env.VITE_ANTHROPIC_API_KEY);
// console.log(import.meta.env.VITE_HF_ACCESS_TOKEN);
console.log(import.meta.env.VITE_GEMINI_API_KEY);
export default function Maine() {
  const [ingredients, setIngredients] = useState([
    "Tomato",
    "Onion",
    "Garlic",
    "Cheese",
  ]);

  const [recipe, setRecipe] = React.useState("");
  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  //  function handleSubmit(event) {
  //     event.preventDefault()
  //     const formData = new FormData(event.currentTarget)
  //     const newIngredient = formData.get("ingredient")
  //     console.log(newIngredient)
  //    ingredients.push(newIngredient)
  //     console.log(ingredients)
  // }

  //fill the array with the ingredients
  function handleSubmit(formData) {
    // event.preventDefault()
    // const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          //cause refreseh when submiting the form i.e url change normal form sunmit functionality but , we will handle / prevent it in the handleSubmit function using event.preventDefault
        />
        <button>Add ingredient</button>
      </form>
      {/* use  > 0  othe wise without it ill render zero on empty array  */}
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
