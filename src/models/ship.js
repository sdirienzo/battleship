class Ship {
    length;

    #hits = [];

    constructor(length) {
        this.length = length;
    }

    get hits() {
        return this.#hits;
    }

    hit() {

    }

}

export default Ship;