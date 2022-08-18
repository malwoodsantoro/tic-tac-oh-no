import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import styled from 'styled-components';
import { calculateWinner } from "./components/utils/calculateWinner";

const Paragraph = styled.p`
  text-align:center;
`;

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect (() => {
    console.log('run!')
    const win = calculateWinner(squares);

    setWinner(win)
  }, [squares])

  const handleClick = (i) => {
    const boardCopy = [...squares];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = isXNext ? "X" : "O";
    setSquares(boardCopy);
    setIsXNext(!isXNext);
  };

  return (
    <div className="App">
      <Board squares={squares} onClick={handleClick} />
      <Paragraph>
        {winner ? "Winner: " + winner : "It's your turn, player " + (isXNext ? "X" : "O") + '!'}
      </Paragraph>
    </div>
  );
}

export default App;
