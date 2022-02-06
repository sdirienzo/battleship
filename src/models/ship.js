class Ship {
    #length;

    #hits = [];

    constructor(length) {
        this.#length = length;
    }

    get length() {
        return this.#length;
    }

    get hits() {
        return this.#hits;
    }

    hit(coordinates) {
        this.#hits.push(coordinates);
    }

    isSunk() {
        return this.#hits.length === this.length;
    }
}

export default Ship;