class Ship {
    length;

    #hits = [];

    constructor(length) {
        this.length = length;
    }

    get hits() {
        return this.#hits;
    }

    hit(coordinates) {
        this.#hits.push(coordinates);
    }

}

export default Ship;