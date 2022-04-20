import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import LoginForm from "./components/LoginForm";
import AddEditRecipeForm from "./components/AddEditRecipeForm";
import FirebaseFirestoreService from "./FirebaseFirestoreService";

function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes()
      .then((fetchedRecipes) => {
        setRecipes(fetchedRecipes);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }, [user]);

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  async function fetchRecipes() {
    let fetchedRecipes = [];

    try {
      const response = await FirebaseFirestoreService.readDocuments("recipes");

      const newRecipes = response.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        data.publishDate = new Date(data.publishDate.seconds * 1000);

        return { ...data, id };
      });

      fetchedRecipes = [...newRecipes];
    } catch (err) {
      console.log(err);
      throw err;
    }
    return fetchedRecipes;
  }

  async function handleFetchedRecipes() {
    try {
      const fetchedRecipes = await fetchRecipes();

      setRecipes(fetchedRecipes);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async function handleAddRecipe(newRecipe) {
    try {
      const response = await FirebaseFirestoreService.createDocument(
        "recipes",
        newRecipe
      );

      //TODO: fetch new recipes from firestore
      handleFetchedRecipes();

      alert(`succeeded to add recipe: ${response.id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Firebase Recipe</h1>
        <LoginForm existingUser={user} />
      </div>
      <div className="main">
        <div className="center">
          <div className="recipe-list-box">
            {recipes && recipes.length > 0 ? (
              <div className="recipe-list">
                {recipes.map((recipe) => {
                  return (
                    <div className="recipe-card" key={recipe.id}>
                      <div className="recipe-name">{recipe.name}</div>
                      <div className="recipe-field">
                        Category: {recipe.category}
                      </div>
                      <div className="recipe-field">
                        Publish Date: {recipe.publishDate.toString()}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
        {user ? <AddEditRecipeForm handleAddRecipe={handleAddRecipe} /> : null}
      </div>
    </div>
  );
}

export default App;
