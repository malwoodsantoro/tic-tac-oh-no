import Square from "./Square";
import styled from 'styled-components';
import img from '../oh-no.jpg';

const StyledBoard = styled.div`
  border: 8px solid #92FCA7;
  background-image: url(${img});
  background-size: cover;
  border-radius: 3px;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

const Heading = styled.h1`
  color: #FE7DB6;
  text-align:center;
`;

const Board = ({ squares, onClick }) => (
  <div>
    <Heading>Tic tac oh no</Heading>
    <StyledBoard>
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </StyledBoard>
  </div>
);

export default Board
