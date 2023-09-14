import styled from "styled-components";

const HitDisplay = ({ hit }) => {
  return (
    <HitContainer>
      <p>Hit</p>
      <Box>{hit}</Box>
    </HitContainer>
  );
};

const HitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 30%;
  color: white;
  font-weight: 600;
  text-align: center;
`;

const Box = styled.div`
  padding: 4px 2px;
  background-color: white;
  border-radius: 4px;
  color: black;
  width: 40px;
  height: 25px;
  overflow: hidden;
`;

export default HitDisplay;
