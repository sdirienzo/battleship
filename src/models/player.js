class Player {

    #isHuman;

    constructor(isHuman) {
        this.#isHuman = isHuman;
    }

    get isHuman() {
        return this.#isHuman;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    makeRandomAttack(gameboard) {
        let x;
        let y;
        do {
            x = this.getRandomInt(0, 10);
            y = this.getRandomInt(0, 10);
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