export class Questions {
    private popQuestions: Array<string> = [];
    private scienceQuestions: Array<string> = [];
    private sportsQuestions: Array<string> = [];
    private rockQuestions: Array<string> = [];
    constructor() {
        for (let i = 0; i < 50; i++) {
            this.popQuestions.push("Pop Question " + i);
            this.scienceQuestions.push("Science Question " + i);
            this.sportsQuestions.push("Sports Question " + i);
            this.rockQuestions.push("Rock Question " + i);
        }
    }
    public askQuestion(placeOfPlayer: number): void {
        if (this.currentCategory(placeOfPlayer) == "Pop") console.log(this.popQuestions.shift());
        if (this.currentCategory(placeOfPlayer) == "Science") console.log(this.scienceQuestions.shift());
        if (this.currentCategory(placeOfPlayer) == "Sports") console.log(this.sportsQuestions.shift());
        if (this.currentCategory(placeOfPlayer) == "Rock") console.log(this.rockQuestions.shift());
    }
    private currentCategory(placeOfPlayer: number): string {
        if ([0,4,8].includes(placeOfPlayer)) return "Pop";
        if ([1,5,9].includes(placeOfPlayer)) return "Science";
        if ([2,6,10].includes(placeOfPlayer)) return "Sports";
        return "Rock";
    }
}