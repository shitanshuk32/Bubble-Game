import styled from "styled-components";

const Display = ({ handleClick }) => {
  return (
    <CircleContainer>
      <Circles handleClick={handleClick} />
    </CircleContainer>
  );
};

const Circles = ({ handleClick }) => {
  const arr = [];

  function selectedNumber(e) {
    console.log(Number(e.target.textContent));
    handleClick(e);
  }

  for (let i = 0; i < 55; i++) {
    arr.push(
      <div className="circle" key={i} onClick={(e) => selectedNumber(e)}>
        {Math.floor(Math.random() * 10)}
      </div>
    );
  }
  return <>{arr}</>;
};

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  flex-wrap: wrap;
`;

export default Display;
