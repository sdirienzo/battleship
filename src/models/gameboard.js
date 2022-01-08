
const SIZE = 10;

class Gameboard {   
    #board = [];

    constructor() {
        this.initialize();
    }

    initialize() {
        for (let x = 0; x < SIZE; x++) {
            this.#board[x] = [];
            for (let y = 0; y < SIZE; y++) {
                this.#board[x][y] = null;
            }
        }
    }

    get board() {
        return this.#board;
    }

    placeShip(ship, x, y, isVertical) {
        if ((x < 0 || x > 9) || (y < 0 || y > 9)) {
            return false
        }
        if (!isVertical) {
            if ((y + (ship.length - 1)) > 9) {
                return false;
            }
        }
        if (isVertical) {
            if ((x + (ship.length - 1)) > 9) {
                return false;
            }
        }
        return true;
    }
}

export default Gameboard;