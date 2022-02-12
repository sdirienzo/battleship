class Player {

    #isHuman;

    constructor(isHuman) {
        this.#isHuman = isHuman;
    }

    get isHuman() {
        return this.#isHuman;
    }

    makeRandomAttack(gameboard) {
        return;
    }

    takeTurn(gameboard, x, y) {
        if (this.#isHuman) {
            return gameboard.receiveAttack(x, y);
        }
    }

}

export default Player;