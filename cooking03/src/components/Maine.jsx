import React, { useState } from "react";
export default function Maine() {
  const [ingredients, setIngredients] = useState([]);

  //FOR RENDRING THE INGREDIANTS
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

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

      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
