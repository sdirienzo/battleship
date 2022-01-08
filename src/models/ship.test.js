import { expect, it } from "@jest/globals";
import Ship from "./ship";

it('initializes length', () => {
    const ship = new Ship(6);
    expect(ship.length).toBe(6);
});

it('gets hit', () => {
    const ship = new Ship(3);
    ship.hit({
        x: 0,
        y: 0
    });
    expect(ship.hits.length).toBe(1);
})