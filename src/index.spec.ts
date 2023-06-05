import runGoldenMaster from "jest-golden-master";
import { Game } from "./index";

test("My first scenario", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.add("Clément");
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
  });
});
