import { useState } from "react";

function AddEditRecipeForm({ handleAddRecipe }) {
  // eslint-disable-next-line no-unused-vars
  const [recipe, setRecipe] = useState("");
  const [name, setName] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [category, setCategory] = useState("");
  const [directions, setDirections] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [ingredients, setIngredients] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [ingredientName, setIngredientName] = useState("");

  return (
    <form className="add-edit-recipe-form-container">
      <h2>Add a New Recipe</h2>
      <div className="top-form-section">
        <div className="fields">
          <label className="recipe-label input-label">
            Recipe Name:
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-text"
            />
          </label>
          <label className="recipe-label input-label">
            Category:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select"
            >
              <option value=""></option>
              <option value="breadsSandwichesAndPizza">
                Breads, Sandwiches, and Pizza
              </option>
              <option value="eggsAndBReakfast">Eggs & Breakfast</option>
              <option value="dessertsAndBakedGoods">
                Desserts & Baked Goods
              </option>
              <option value="fishAndSeaFood">Fish & Seafood</option>
              <option value="vegetables">Vegetables</option>
            </select>
          </label>
          <label className="recipe-label input-label">
            Directions:
            <textarea
              required
              value={directions}
              onChange={(e) => setDirections(e.target.value)}
              className="input-text directions"
            ></textarea>
          </label>
          <label className="recipe-label input-label">
            Publish Date:
            <input
              type="date"
              required
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
              className="input-text"
            />
          </label>
        </div>
      </div>
    </form>
  );
}

export default AddEditRecipeForm;
