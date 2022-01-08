
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
        if (!isVertical) {
            for (let index = y; index < y + ship.length; index++) {
                if (this.#board[x][index] !== null) {
                    return false;
                }
            }
            for (let index = y; index < y + ship.length; index++) {
                this.#board[x][index] = ship;
            }
        }
        if (isVertical) {
            for (let index = x; index < x + ship.length; index++) {
                if (this.#board[index][y] !== null) {
                    return false;
                }
            }
            for (let index = x; index < x + ship.length; index++) {
                this.#board[index][y] = ship;
            }
        }
        return true;
    }
}

export default Gameboard;