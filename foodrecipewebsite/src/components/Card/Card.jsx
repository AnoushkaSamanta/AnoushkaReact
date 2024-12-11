import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  // Define the isRed state and toggleColor function directly in the Card component
  const [isRed, setIsRed] = useState(false);
  const [isYellow, setIsYellow] = useState(false);
  // Toggle the heart color between red and white
  const toggleHeartColor = () => {
    setIsRed(!isRed);
  };
  const toggleStarColor = () => {
    setIsYellow(!isYellow);
  };
  return (
    // <NavLink to={`/meal/${props.idMeal}`}>
    <div className="w-[300px] h-[350px] border border-[#e5e7eb] shadow p-[12px]  rounded-2xl">
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
            {/* Conditionally render the heart icon based on isRed */}
            <img
              src={
                isRed
                  ? "/src/assets/images/heart_red.svg"
                  : "/src/assets/images/heart.svg"
              }
              alt="Heart"
              onClick={toggleHeartColor} // Toggle the heart color when clicked
              style={{ cursor: "pointer" }}
            />
            <img src="/src/assets/images/comment.svg" alt="Comment" />
          </div>
        </div>
      </div>
    </div>
    // {/* </NavLink> */}
  );
}

export default Card;
