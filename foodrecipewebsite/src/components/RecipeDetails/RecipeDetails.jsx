// import React, { useContext } from 'react'
// import RecipeContext from "../../contexts/RecipeContext";
// function RecipeDetails() {
//     const {recipe}=useContext(RecipeContext);
//   return (
//     <div>
//       Welcome to {recipe.rname}
//     </div>
//   )
// }

// export default RecipeDetails

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeContext from "../../contexts/RecipeContext";

function RecipeDetails() {
  const { rname } = useParams(); // Get rname from the URL params
  const { recipe } = useContext(RecipeContext);

  const [currentRecipe, setCurrentRecipe] = useState(recipe);

  useEffect(() => {
    if (rname) {
      setCurrentRecipe({ rname }); // Update the state based on rname
    }
  }, [rname]);

  
  return (
    <div>
      <h1 className='text-3xl font-bold' style={{ color: "#DC582A" }} >{currentRecipe.rname.replace(/_/g," ").toUpperCase()}</h1>
      

    </div>
  );
}

export default RecipeDetails;


