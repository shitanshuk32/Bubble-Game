import styled from "styled-components";
import Info from "./Info";
import Display from "./Display";

const Container = ({ hit, score, setScore, setEnd, handleClick }) => {
  return (
    <OuterContainer>
      <Info hit={hit} score={score} setScore={setScore} setEnd={setEnd} />
      <Display handleClick={handleClick} />
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  width: 70%;
  height: 80%;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

export default Container;
