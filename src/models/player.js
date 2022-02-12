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
        if (gameboard.receiveAttack(x, y)) {
            return true;
        }
        return;
    }

}

export default Player;