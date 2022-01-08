
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
                this.#board[y] = null;
            }
        }
    }

    get board() {
        return this.#board;
    }
}

export default Gameboard;