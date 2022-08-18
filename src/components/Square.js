import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background-color: transparent;
  font-size: 2em;
  font-weight: bold;
  border: 2px solid steelblue;
  border-radius: 3px;
`;

const Square = ({onClick, value}) => (
  <Button onClick={onClick}>{value}</Button>
);


export default Square
