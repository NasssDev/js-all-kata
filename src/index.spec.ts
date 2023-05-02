import {Action, Game, computeNextGame, checkIfWinFromLeftToRight, Grid, Player} from ".";

describe("playing each tour", () => {
  test("start of game", () => {
    // GIVEN
    const game: Game = {
      grid: [
        ["_","_","_"],
        ["_","_","_"],
        ["_","_","_"]
      ],
      nextPlayer: "X"
    };
    const action: Action = {
      player: "X",
      coordinates: {
        x: 0,
        y: 0,
      },
    };
    // WHEN
    const actual = computeNextGame(game, action);

    // THEN
    const expected: Game = {
      grid: [
        ["X", "_", "_"],
        ["_", "_", "_"],
        ["_", "_", "_"],
      ],
      nextPlayer: "O",
    };
    expect(actual).toEqual(expected);
  });

  test("secound tour of game", () => {
    // GIVEN
    const game: Game = {
      grid: [
        ["X","_","_"],
        ["_","_","_"],
        ["_","_","_"]
      ],
      nextPlayer: "O"
    };
    const action: Action = {
      player: "O",
      coordinates: {
        x: 1,
        y: 1,
      },
    };
    // WHEN
    const actual = computeNextGame(game, action);

    // THEN
    const expected: Game = {
      grid: [
        ["X", "_", "_"],
        ["_", "O", "_"],
        ["_", "_", "_"],
      ],
      nextPlayer: "X",
    };
    expect(actual).toEqual(expected);
  });

  test("third tour of the game", () => {
    // GIVEN
    const game: Game = {
      grid: [
        ["X","_","_"],
        ["_","O","_"],
        ["_","_","_"]
      ],
      nextPlayer: "X"
    };
    const action: Action = {
      player: "X",
      coordinates: {
        x: 0,
        y: 1,
      },
    };
    // WHEN
    const actual = computeNextGame(game, action);

    // THEN
    const expected: Game = {
      grid: [
        ["X", "_", "_"],
        ["X", "O", "_"],
        ["_", "_", "_"],
      ],
      nextPlayer: "O",
    };
    expect(actual).toEqual(expected);
  });

  test("fourth tour of the game", () => {
    // GIVEN
    const game: Game = {
      grid: [
        ["X","_","_"],
        ["X","O","_"],
        ["_","_","_"]
      ],
      nextPlayer: "O"
    };
    const action: Action = {
      player: "O",
      coordinates: {
        x: 0,
        y: 2,
      },
    };
    // WHEN
    const actual = computeNextGame(game, action);

    // THEN
    const expected: Game = {
      grid: [
        ["X", "_", "_"],
        ["X", "O", "_"],
        ["O", "_", "_"],
      ],
      nextPlayer: "X",
    };
    expect(actual).toEqual(expected);
  });
});

describe("win game", () => {
  test("win on first line from left to right : winner X", () => {
    // GIVEN
    const grid : Grid = [
        ["X","X","X"],
        ["_","_","_"],
        ["_","_","_"]
      ]

    const action : Player = "X";
    // WHEN
    const actual = checkIfWinFromLeftToRight(grid,action);

    // THEN
    const expected = "winner X"
    expect(actual).toEqual(expected);
  });

  test("win on second line from left to right : winner X", () => {
    const grid : Grid = [
      ["_","_","_"],
      ["X","X","X"],
      ["_","_","_"]
    ]

    const action : Player = "X";
    // WHEN
    const actual = checkIfWinFromLeftToRight(grid, action);

    // THEN
    const expected = "winner X"
    expect(actual).toEqual(expected);
  });

  test("win on third line from left to right : winner O", () => {
    const grid : Grid = [
      ["_","_","_"],
      ["_","_","_"],
      ["O","O","O"]
    ]

    const action : Player = "O";
    // WHEN
    const actual = checkIfWinFromLeftToRight(grid, action);

    // THEN
    const expected = "winner O"
    expect(actual).toEqual(expected);
  });

  test("fourth tour of the game", () => {
    // GIVEN
    const game: Game = {
      grid: [
        ["X","_","_"],
        ["X","O","_"],
        ["_","_","_"]
      ],
      nextPlayer: "O"
    };
    const action: Action = {
      player: "O",
      coordinates: {
        x: 0,
        y: 2,
      },
    };
    // WHEN
    const actual = computeNextGame(game, action);

    // THEN
    const expected: Game = {
      grid: [
        ["X", "_", "_"],
        ["X", "_", "_"],
        ["O", "_", "_"],
      ],
      nextPlayer: "X",
    };
    expect(actual).toEqual(expected);
  });
});

