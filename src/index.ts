export type Player = "X" | "O";

export type Cell = "_" | Player;

export type Grid = [[Cell, Cell, Cell],[Cell, Cell, Cell],[Cell, Cell, Cell]];

export type Coordinates = {
  x: 0 | 1 | 2;
  y: 0 | 1 | 2;
};

export type Action = {
  player: Player;
  coordinates: Coordinates;
}

export type Game = {
  grid: Grid;
  nextPlayer: Player;
};

export const computeNextGame = (game: Game, action : Action): Game => {

  if (action.player === "O") {
    game.grid[action.coordinates.y][action.coordinates.x] = "O";
    return {
      grid: game.grid,
      nextPlayer: "X",
    };
  } else {

  }
  return {
    grid: [
      ["X", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ],
    nextPlayer: "O",
  };
};