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
    const coordinates = {
        x: 0,
        y: 0
    };
    expect(gameboard.placeShip(ship, coordinates, false)).toBe(true);
});