import React, { useState } from "react";

const WINNER_CONST = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const GRID = Array.from(Array(9).keys());

function App() {
  const [player, setPlayer] = useState<"X" | "O">("X");
  const [plays, setPlays] = useState<Record<number, "X" | "O">>({});

  function handleClick(cell: number) {
    if (plays[cell]) return;

    const draft = { ...plays, [cell]: player };
    setPlays(draft);

    const hasWinner = WINNER_CONST.some((comp) => {
      return comp.every((cell) => draft[cell] === player);
    });

    if (hasWinner) {
      const winnerCombination = WINNER_CONST.find((comp) => {
        return comp.every((cell) => draft[cell] === player);
      });

      alert("Winner: " + player + ", Combination: " + winnerCombination);
      setPlays({});
      setPlayer("X");
      return;
    }

    setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }

  function getCellValue(cell: number) {
    return plays[cell] ? plays[cell] : "";
  }

  return (
    <div className="center">
      <main>
        {GRID.map((i) => (
          <button onClick={() => handleClick(i)} key={i}>
            {getCellValue(i)}
          </button>
        ))}
      </main>
    </div>
  );
}
//sssssssss
export default App;
