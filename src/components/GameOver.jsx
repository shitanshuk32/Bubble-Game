import styled from "styled-components";

const GameOver = ({ score, handlePlayAgain }) => {
  return (
    <Container>
      <h2>Game Over</h2>
      <p>Times Up !! You scored {score}</p>
      <Button onClick={handlePlayAgain}>Play Again</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  height: 40%;
  background-color: white;
  border-radius: 10px;
  overflow: auto;
  text-align: center;
  padding: 10px;
  h2 {
    padding: 20px;
  }
  p {
    padding: 20px;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  margin: 30px auto;
  background-color: #489648;
  color: white;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #3b7a3b;
  }
`;

export default GameOver;
