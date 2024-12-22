// import React, { useState } from "react";
// import { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import RecipeContext from "../../contexts/RecipeContext"
// function Card(props) {
  
//   const [isRed, setIsRed] = useState(false);
//   const [isYellow, setIsYellow] = useState(false);
//   const [rname,setRname]=useState("");
//   const {setRecipe}=useContext(RecipeContext);

//   const toggleHeartColor = () => {
//     setIsRed(!isRed);
//   };
//   const toggleStarColor = () => {
//     setIsYellow(!isYellow);
//   };
//   const handleClick=()=>{
//       const newrname=props.strMeal.toLowerCase().replace(/ /g, "_");
//       setRname(newrname);
//       setRecipe({rname:newrname});
     
//   }
//   return (
//     <NavLink to={`/${rname}`}>
//     <div className="w-[300px] h-[350px] border border-[#e5e7eb] shadow p-[12px]  rounded-2xl" onClick={handleClick} >
//       <img
//         src={props.strMealThumb}
//         alt=""
//         className="w-[285px] h-[200px] rounded-2xl"
//       />
//       <div>
//         <p style={{ color: "#A1A1A1" }}>{props.strCategory}</p>
//         <div className="flex justify-between mb-[10px]">
//           <h1 className="text-2xl font-bold">{props.strMeal}</h1>
//           <div className="flex flex-col mr-[5px]">
//             <img
//               src={
//                 isYellow
//                   ? "/src/assets/images/yellowstar.svg"
//                   : "/src/assets/images/star.svg"
//               }
//               alt="Star"
//               onClick={toggleStarColor}
//               style={{ cursor: "pointer" }}
//             />
//           </div>
//         </div>
//         <div className="flex justify-between">
//           <p style={{ color: "#DC582A" }} className="font-bold text-xl">
//             {props.strArea}
//           </p>
//           <div className="flex gap-[3px]">
            
//             <img
//               src={
//                 isRed
//                   ? "/src/assets/images/heart_red.svg"
//                   : "/src/assets/images/heart.svg"
//               }
//               alt="Heart"
//               onClick={toggleHeartColor}
//               style={{ cursor: "pointer" }}
//             />
//             <img src="/src/assets/images/comment.svg" alt="Comment" />
//           </div>
//         </div>
//       </div>
//     </div>
//     </NavLink>
    
//   );
// }

// export default Card;

import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import RecipeContext from "../../contexts/RecipeContext";

function Card(props) {
  const [isRed, setIsRed] = useState(false);
  const [isYellow, setIsYellow] = useState(false);
  const { setRecipe } = useContext(RecipeContext);
  
  const [rname, setRname] = useState("");

  const toggleHeartColor = () => {
    setIsRed(!isRed);
  };

  const toggleStarColor = () => {
    setIsYellow(!isYellow);
  };

  const handleClick = () => {
    const newrname = props.strMeal.toLowerCase().replace(/ /g, "_");
    setRname(newrname); // Set the rname state
    setRecipe({ rname: newrname }); // Set the context state
  };

  return (
    <div
      className="w-[300px] h-[350px] border border-[#e5e7eb] shadow p-[12px] rounded-2xl"
      onClick={handleClick}
    >
      <img
        src={props.strMealThumb}
        alt=""
        className="w-[285px] h-[200px] rounded-2xl"
      />
      <div>
        <p style={{ color: "#A1A1A1" }}>{props.strCategory}</p>
        <div className="flex justify-between mb-[10px]">
          <h1 className="text-2xl font-bold">{props.strMeal}</h1>
          <div className="flex flex-col mr-[5px]">
            <img
              src={
                isYellow
                  ? "/src/assets/images/yellowstar.svg"
                  : "/src/assets/images/star.svg"
              }
              alt="Star"
              onClick={toggleStarColor}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <p style={{ color: "#DC582A" }} className="font-bold text-xl">
            {props.strArea}
          </p>
          <div className="flex gap-[3px]">
            <img
              src={
                isRed
                  ? "/src/assets/images/heart_red.svg"
                  : "/src/assets/images/heart.svg"
              }
              alt="Heart"
              onClick={toggleHeartColor}
              style={{ cursor: "pointer" }}
            />
            <img src="/src/assets/images/comment.svg" alt="Comment" />
          </div>
        </div>
      </div>
      {/* Render the NavLink here after the state has been updated */}
      {rname && (
        <NavLink to={`/recipe/${rname}`}>
          <button>Go to Recipe</button>
        </NavLink>
      )}
    </div>
  );
}

export default Card;
