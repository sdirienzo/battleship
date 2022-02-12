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

    takeTurn(x, y) {
        return;
    }

}

export default Player;