import runGoldenMaster from "jest-golden-master";
import { Game } from "./index";

test("My scenario 1", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.add("Clément");
    game.roll(1);
    game.wasCorrectlyAnswered(); // Mathieu
    game.roll(1);
    game.wasCorrectlyAnswered(); // Thomas
    game.roll(1);
    game.wasCorrectlyAnswered(); // Clément
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

test("My scenario 2", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(1);// Mathieu
    game.wasCorrectlyAnswered();
    game.roll(1);// Thomas
    game.wrongAnswer();
    game.roll(2);// Mathieu
    game.wasCorrectlyAnswered();
    game.roll(1);// Thomas
    game.wrongAnswer();
  });
});

test("My scenario 3", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(12);// Mathieu
    game.wrongAnswer();
    game.roll(3);// Thomas
    game.wrongAnswer();
    game.roll(2);// Mathieu
    game.wasCorrectlyAnswered();
    game.roll(9);// Thomas
    game.wrongAnswer();
    game.roll(3);// Mathieu
    game.wasCorrectlyAnswered();
  });
});

test("My scenario 4", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(1);
    game.wasCorrectlyAnswered(); // Mathieu
    game.roll(1);
    game.wasCorrectlyAnswered(); // Thomas
    game.roll(1);
    game.wasCorrectlyAnswered();// Mathieu
    game.roll(1);
    game.wasCorrectlyAnswered();// Thomas
    game.roll(1);
    game.wasCorrectlyAnswered();// Mathieu
    game.roll(1);
    game.wasCorrectlyAnswered();// Thomas
    game.roll(1);
    game.wasCorrectlyAnswered();// Mathieu
    game.roll(1);
    game.wasCorrectlyAnswered();// Thomas
    game.roll(1);
    game.wasCorrectlyAnswered();// Mathieu
    game.roll(1);
    game.wasCorrectlyAnswered();// Thomas
    game.roll(1);
    game.wrongAnswer();         // Mathieu
    game.roll(1);
    game.wasCorrectlyAnswered();// Thomas
    game.roll(1);
    game.wasCorrectlyAnswered();// Mathieu
  });
});