import { it } from "@jest/globals";
import Ship from "./ship";

it('initializes length', () => {
    const ship = new Ship(6);
    expect(ship.length).toBe(6);
})