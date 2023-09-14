import styled from "styled-components";
import Timer from "./Timer";
import Score from "./Score";
import HitDisplay from "./HitDisplay";

const Info = ({ hit, score, setScore, setEnd }) => {
  return (
    <InfoContainer>
      <HitDisplay hit={hit} />
      <Timer setScore={setScore} setEnd={setEnd} />
      <Score score={score} />
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20%;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: rgb(55, 95, 55);
`;

export default Info;
