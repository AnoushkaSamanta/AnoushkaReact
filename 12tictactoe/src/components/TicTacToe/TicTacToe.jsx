import React, { useRef, useState } from "react";

function TicTacToe() {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(""); // Store the winner
  const titleRef = useRef(null);

  const checkWin = (data) => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[2]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[0]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[2]);
    }
  };

  const won = (winner) => {
    setLock(true);
    setWinner(winner); // Set the winner when someone wins
  };

  const toggle = (num) => {
    if (lock || data[num] !== "") {
      console.log("game lock"); // Prevent interaction if game is locked or the box is already filled
      return;
    }
    const newData = [...data];
    const newCount = count + 1;

    if (newCount % 2 === 0) {
      newData[num] = "x";
    } else {
      newData[num] = "o";
    }

    setData(newData);
    setCount(newCount);
    checkWin(newData); // Check for win after updating the box
  };

  const reset = () => {
    setLock(false); // Unlock the game
    setData(["", "", "", "", "", "", "", "", ""]); // Clear the board
    setWinner(""); // Clear the winner state
    setCount(0); // Reset the move count
  };

  return (
    <div className="title w-full h-screen bg-zinc-900 flex flex-col items-center gap-8" ref={titleRef}>
      <h1 className="title text-3xl font-semibold text-zinc-600 mt-5">
        {lock ? (
          <>
            Congratulations: {winner.toUpperCase()} Wins!
          </>
        ) : (
          "Tic-Tac-Toe"
        )}
      </h1>
      <div className="board flex flex-col gap-2">
        <div className="row1 flex flex-row gap-2">
          <div
            className="h-[150px] w-[150px] bg-zinc-800  rounded-md flex items-center justify-center"
            onClick={() => toggle(0)}
          >
            {data[0] === "x" && <img src="/Assets/cross.avif" alt="X" />}
            {data[0] === "o" && <img src="/Assets/circle.png" alt="O" />}
          </div>
          <div
            className="h-[150px] w-[150px] bg-zinc-800  rounded-md flex items-center justify-center"
            onClick={() => toggle(1)}
          >
            {data[1] === "x" && <img src="/Assets/cross.avif" alt="X" />}
            {data[1] === "o" && <img src="/Assets/circle.png" alt="O" />}
          </div>
          <div
            className="h-[150px] w-[150px] bg-zinc-800  rounded-md flex items-center justify-center"
            onClick={() => toggle(2)}
          >
            {data[2] === "x" && <img src="/Assets/cross.avif" alt="X" />}
            {data[2] === "o" && <img src="/Assets/circle.png" alt="O" />}
          </div>
        </div>
        <div className="row2 flex flex-row gap-2">
          <div
            className="h-[150px] w-[150px] bg-zinc-800  rounded-md flex items-center justify-center"
            onClick={() => toggle(3)}
          >
            {data[3] === "x" && <img src="/Assets/cross.avif" alt="X" />}
            {data[3] === "o" && <img src="/Assets/circle.png" alt="O" />}
          </div>
          <div
            className="h-[150px] w-[150px] bg-zinc-800  rounded-md flex items-center justify-center"
            onClick={() => toggle(4)}
          >
            {data[4] === "x" && <img src="/Assets/cross.avif" alt="X" />}
            {data[4] === "o" && <img src="/Assets/circle.png" alt="O" />}
          </div>
          <div
            className="h-[150px] w-[150px] bg-zinc-800  rounded-md flex items-center justify-center"
            onClick={() => toggle(5)}
          >
            {data[5] === "x" && <img src="/Assets/cross.avif" alt="X" />}
            {data[5] === "o" && <img src="/Assets/circle.png" alt="O" />}
          </div>
        </div>
        <div className="row3 flex flex-row gap-2">
          <div
            className="h-[150px] w-[150px] bg-zinc-800  rounded-md flex items-center justify-center"
            onClick={() => toggle(6)}
          >
            {data[6] === "x" && <img src="/Assets/cross.avif" alt="X" />}
            {data[6] === "o" && <img src="/Assets/circle.png" alt="O" />}
          </div>
          <div
            className="h-[150px] w-[150px] bg-zinc-800  rounded-md flex items-center justify-center"
            onClick={() => toggle(7)}
          >
            {data[7] === "x" && <img src="/Assets/cross.avif" alt="X" />}
            {data[7] === "o" && <img src="/Assets/circle.png" alt="O" />}
          </div>
          <div
            className="h-[150px] w-[150px] bg-zinc-800  rounded-md flex items-center justify-center"
            onClick={() => toggle(8)}
          >
            {data[8] === "x" && <img src="/Assets/cross.avif" alt="X" />}
            {data[8] === "o" && <img src="/Assets/circle.png" alt="O" />}
          </div>
        </div>
      </div>
      <button className="bg-zinc-800 px-6 py-2 text-xl rounded-full text-white" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;
