
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

    allShipsAreSunk() {
        for (let x = 0; x < SIZE; x++) {
            for (let y = 0; y < SIZE; y++) {
                if (this.#board[x][y] !== null && this.#board[x][y] !== -1) {
                    if (!this.#board[x][y].isSunk()) {
                        return false;
                    }
                } 
            }
        }

        return true;
    }

    isPlacementValid(shipLength, x, y, isVertical) {
        if ((x < 0 || x > 9) || (y < 0 || y > 9)) {
            return false
        }
        if (!isVertical) {
            if ((y + (shipLength - 1)) > 9) {
                return false;
            }
        }
        if (isVertical) {
            if ((x + (shipLength - 1)) > 9) {
                return false;
            }
        }
        if (!isVertical) {
            for (let index = y; index < y + shipLength; index++) {
                if (this.#board[x][index] !== null) {
                    return false;
                }
            }
        }
        if (isVertical) {
            for (let index = x; index < x + shipLength; index++) {
                if (this.#board[index][y] !== null) {
                    return false;
                }
            }
        }
        return true;
    }

    placeShip(ship, x, y, isVertical) {
        if (!this.isPlacementValid(ship.length, x, y, isVertical)) {
            return false;
        }
        if (!isVertical) {
            for (let index = y; index < y + ship.length; index++) {
                this.#board[x][index] = ship;
            }
        }
        if (isVertical) {
            for (let index = x; index < x + ship.length; index++) {
                this.#board[index][y] = ship;
            }
        }
        return true;
    }

    receiveAttack(x, y) {
        if (this.#board[x][y] === null) {
            this.#board[x][y] = -1;
            return true;
        }
        if (this.#board[x][y] === -1) {
            return false;
        }
        for (let hit of this.#board[x][y].hits) {
            if (hit.x === x && hit.y === y) {
                return false
            }
        }
        this.#board[x][y].hit({
            x,
            y
        });
        return true;
    }
}

export default Gameboard;