class Player {

    #isHuman;

    constructor(isHuman) {
        this.#isHuman = isHuman;
    }

    get isHuman() {
        return this.#isHuman;
    }

    makeRandomAttack(gameboard) {
        do {
            let x = Math.random() * (10 - 0) + 0;
            let y = Math.random() * (10 - 0) + 0;
        } while (!gameboard.receiveAttack(x, y));
        
        return true;
    }

    takeTurn(gameboard, x, y) {
        if (this.#isHuman) {
            return gameboard.receiveAttack(x, y);
        } else {
            return this.makeRandomAttack(gameboard);
        }
        
    }

}

export default Player;