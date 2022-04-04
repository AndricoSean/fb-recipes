import "./App.css";
import React from "react";
import { useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import LoginForm from "./components/LoginForm";
import AddEditRecipeForm from "./components/AddEditRecipeForm";
import FirebaseFirestoreService from "./FirebaseFirestoreService";

function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  async function handleAddRecipe(newRecipe) {
    try {
      const response = await FirebaseFirestoreService.createDocument(
        "recipes",
        newRecipe
      );

      //TODO: fetch new recipes from firestore

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
        <AddEditRecipeForm handleAddRecipe={handleAddRecipe} />
      </div>
    </div>
  );
}

export default App;
