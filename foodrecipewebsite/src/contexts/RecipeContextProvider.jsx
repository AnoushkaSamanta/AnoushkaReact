import React from "react";
import { useState } from "react";
import RecipeContext from "./RecipeContext";

const RecipeContextProvider = ({ children }) => {
  const [recipe, setRecipe] = useState(null);
  return (
    <RecipeContext.Provider value={{ recipe, setRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
