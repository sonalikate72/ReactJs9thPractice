import React, { useEffect, useState } from "react";
import "./tictactoe.css";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); //  [null]
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const Winner = calculateToWinner(board);
    setWinner(winner);
    console.log("Winner is", Winner);
  }, [board]);

  const handleClick = (index) => {
    if (board[index]) {
      return;
    }
    board[index] = isNext ? "X" : "0";
    setIsNext(!isNext);
    setBoard([...board]);
  };
  return (
    <>
      {winner ? (
        <div>Winner is : {winner} </div>
      ) : (
        <div><h3>Next Palyer is: {isNext ? "X" : "0"}</h3></div>
      )}
      <div className="tictac-game-board">
        {board.map((value, index) => {
          return (
            <div
              className="square"
              onClick={() => {
                handleClick(index);
              }}
            >
              {value}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TicTacToe;

const calculateToWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    // Loop on outer array = i=0
    const [a, b, c] = lines[i]; // a=0 , b=1, c=2
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};
