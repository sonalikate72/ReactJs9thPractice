import React, { useEffect, useState } from "react";
import "./tictactoe.css";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); //  [null]
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState(null);


  const handleClick = (index) => {
    if (board[index]) {
      return;
    }
    board[index] = isNext ? "X" : "0";
    setIsNext(!isNext);
    setBoard([...board]);
  };
  
  useEffect(()=>{
    console.log("Calculating Winner");
    const winner =calculateToWinner(board);
    setWinner(winner);
    console.log("Winner is " + winner);

},[board])

const calculateToWinner = (square) => {
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
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
};
  return (
    <>
    <h2>Tic-Tac-Toe Game Board</h2>
      {winner ? (
        <div><h3>Winner is : {winner}</h3> </div>
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

