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

export const computeNextGame = (game: Game, action : Action): Game | string => {
  action.player === "O" ? game.grid[action.coordinates.y][action.coordinates.x] = "O" : game.grid[action.coordinates.y][action.coordinates.x] = "X";
  action.player === "O" ? game.nextPlayer = "X" : game.nextPlayer = "O";
  if (checkIfWinFromLeftToRight(game.grid, action.player)){
    return "winner "+action.player;
  }
  return {
    grid: game.grid,
    nextPlayer: game.nextPlayer,
  };
};

export const checkIfWinFromLeftToRight = (grid : Grid, currentPlayer : Player) : boolean => {
  let winFromTopToBottom
  let winFromLeftToRight = grid[0].every(cell => cell === currentPlayer) || grid[1].every(cell => cell === currentPlayer) || grid[2].every(cell => cell === currentPlayer)
  for (let i =0;i < 3;i++) {
    winFromTopToBottom = grid.every((row) => row[i] === currentPlayer);
    if (winFromTopToBottom) break;
  }
  return winFromLeftToRight || winFromTopToBottom;
}

export const checkIfWinFromTopToBottom = (grid : Grid, currentPlayer : Player) : string => {

}