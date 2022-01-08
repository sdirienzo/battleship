import { expect, it } from "@jest/globals";
import Gameboard from "./gameboard";
import Ship from "./ship";

it('initializes 10x10 gameboard', () => {
    const array = [...Array(10)].map(x=>Array(10).fill(null))    
    const gameboard = new Gameboard();
    expect(gameboard.board).toStrictEqual(array);
});

it('returns true when placing ship at valid horizontal coordinates', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    expect(gameboard.placeShip(ship, 0, 0, false)).toBe(true);
});

it('returns false when placing ship at invalid horizontal coordinates', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    expect(gameboard.placeShip(ship, 0, 8, false)).toBe(false);
});

it('returns true when placing ship at valid vertical coordinates', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    expect(gameboard.placeShip(ship, 0, 0, true)).toBe(true);
});