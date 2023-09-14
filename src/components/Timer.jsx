import { useEffect, useState } from "react";
import styled from "styled-components";

const Timer = ({ setScore, setEnd }) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      setScore((prev) => {
        setEnd(prev);
      });
      setScore(0);
      setTimer(60);
    }
  }, [timer, setScore, setTimer, setEnd]);

  return (
    <TimerContainer>
      <p>Timer</p>
      <Box>{timer}</Box>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
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

export default Timer;
