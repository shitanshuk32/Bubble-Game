import { useState } from "react";
import GameOver from "./components/GameOver";
import Container from "./components/Container";

const App = () => {
  const [hit, setHit] = useState(Math.floor(Math.random() * 10));
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(0);

  function handleClick(e) {
    if (Number(e.target.textContent) === hit) {
      setHit(Math.floor(Math.random() * 10));
      setScore((prev) => prev + 10);
    }
  }

  function handlePlayAgain() {
    setEnd(0);
  }

  return (
    <>
      {end != 0 ? (
        <GameOver score={end} handlePlayAgain={handlePlayAgain}></GameOver>
      ) : (
        <>
          <h1>Bubble Game</h1>
          <Container
            hit={hit}
            score={score}
            setScore={setScore}
            setEnd={setEnd}
            handleClick={handleClick}
          />
        </>
      )}
    </>
  );
};

{
  /* <HighScore></HighScore> */
}

export default App;
