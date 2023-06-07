import {Questions} from "./classes/Questions";
// import {Board} from "./classes/Board";
export class Game {
    private players: Array<string> = [];
    private places: Array<number> = [];
    private purses: Array<number> = [];
    private inPenaltyBox: Array<boolean> = [];
    private currentPlayer: number = 0;
    private isGettingOutOfPenaltyBox: boolean = false;
    // private boardClass = new Board();
    private questionsClass = new Questions();
    public add(name: string) {
        this.players.push(name);
        this.places[this.players.length - 1] = 0;
        this.purses[this.players.length - 1] = 0;
        this.inPenaltyBox[this.players.length - 1] = false;

        console.log(`Player ${name} has joined the game at place ${this.places[this.currentPlayer]} with ${this.purses[this.currentPlayer]} point(s)`)
    }
    public roll(roll: number) {

        console.log(`player ${this.players[this.currentPlayer]} has rolled ${roll} !`)

        if (this.inPenaltyBox[this.currentPlayer] && roll % 2 != 0) {
            this.isGettingOutOfPenaltyBox = true;
            console.log(`player ${this.players[this.currentPlayer]} goes out of penalty box `)
        }
        if (this.inPenaltyBox[this.currentPlayer] && roll % 2 == 0) {
            this.isGettingOutOfPenaltyBox = false;
            console.log(`player ${this.players[this.currentPlayer]} stays in penalty box`)
        }else{

            this.addRoll(roll);

            this.questionsClass.askQuestion(this.places[this.currentPlayer]);
        }
    }

    private didPlayerWin(): boolean {
        return this.purses[this.currentPlayer] == 6;
    }

    public wrongAnswer(): boolean {

        console.log(`Player ${this.players[this.currentPlayer]} has answered wrongly`);

        this.inPenaltyBox[this.currentPlayer] = true;
        console.log(`player ${this.players[this.currentPlayer]} goes in penalty box !`)

        this.nextPlayer();

        return false;
    }

    public wasCorrectlyAnswered(): boolean {

        if (this.inPenaltyBox[this.currentPlayer]) {
            if (this.isGettingOutOfPenaltyBox) {

                console.log(`Player ${this.players[this.currentPlayer]} has answered correctly`);

                this.inPenaltyBox[this.currentPlayer] = false;
                console.log(`Player ${this.players[this.currentPlayer]} goes out of penalty box`);

                this.addPoint();

                if (this.didPlayerWin()) console.log(`Player ${this.players[this.currentPlayer]} has won the Game !`);

                this.nextPlayer();

                return this.didPlayerWin();
            } else {

                this.nextPlayer();

                return false;
            }
        } else {

            this.addPoint();

            this.didPlayerWin() && console.log(`Player ${this.players[this.currentPlayer]} has won the Game !`);

            this.nextPlayer();

            return this.didPlayerWin();
        }
    }
    private addRoll(roll) {
        this.places[this.currentPlayer] = this.places[this.currentPlayer] + roll;
        if (this.places[this.currentPlayer] > 11) {
            this.places[this.currentPlayer] = this.places[this.currentPlayer] - 12;
        }
        console.log(`player ${this.players[this.currentPlayer]} is now at position ${this.places[this.currentPlayer]}`)
    }
    private nextPlayer() {
        this.currentPlayer += 1;
        if (this.currentPlayer == this.players.length) this.currentPlayer = 0;
        console.log(`It is ${this.players[this.currentPlayer]}'s turn !`);
    }

    private addPoint() {
        this.purses[this.currentPlayer] += 1;
        console.log(`Player ${this.players[this.currentPlayer]} + 1 point now at ${this.purses[this.currentPlayer]} point(s)`)
    }
}