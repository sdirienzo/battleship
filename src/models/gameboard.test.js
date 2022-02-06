import { expect, it } from "@jest/globals";
import Gameboard from "./gameboard";
import Ship from "./ship";

it('initializes 10x10 gameboard', () => {
    const array = [...Array(10)].map(x => Array(10).fill(null));    
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

it('returns false when placing ship at invalid vertical coordinates', () => {
    const gameboard = new Gameboard();
    const ship = new Ship(3);
    expect(gameboard.placeShip(ship, 8, 0, true)).toBe(false);
});

it('places a ship at valid horizontal coordinates', () => {
    const ship = new Ship(3);

    const board = [...Array(10)].map(x => Array(10).fill(null));
    board[0][0] = ship;
    board[0][1] = ship;
    board[0][2] = ship;

    const gameboard = new Gameboard();
    gameboard.placeShip(ship, 0, 0, false);
    expect(gameboard.board).toStrictEqual(board);
});

it('does not place a ship at invalid horizontal coordinates', () => {
    const ship = new Ship(3);

    const board = [...Array(10)].map(x => Array(10).fill(null));

    const gameboard = new Gameboard();
    gameboard.placeShip(ship, 0, 8, false);
    expect(gameboard.board).toStrictEqual(board);
});

it('places a ship at valid vertical coordinates', () => {
    const ship = new Ship(3);

    const board = [...Array(10)].map(x => Array(10).fill(null));
    board[0][0] = ship;
    board[1][0] = ship;
    board[2][0] = ship;

    const gameboard = new Gameboard();
    gameboard.placeShip(ship, 0, 0, true);
    expect(gameboard.board).toStrictEqual(board);
});

it('does not place a ship at invalid vertical coordinates', () => {
    const ship = new Ship(3);

    const board = [...Array(10)].map(x => Array(10).fill(null));

    const gameboard = new Gameboard();
    gameboard.placeShip(ship, 8, 0, true);
    expect(gameboard.board).toStrictEqual(board);
});

it('does not place a ship at horizontal coordinates when coordinates occupied', () => {
    const firstShip = new Ship(4);
    const secondShip = new Ship(3);

    const board = [...Array(10)].map(x => Array(10).fill(null));
    board[0][2] = firstShip;
    board[0][3] = firstShip;
    board[0][4] = firstShip;
    board[0][5] = firstShip;

    const gameboard = new Gameboard();
    gameboard.placeShip(firstShip, 0, 2, false);
    gameboard.placeShip(secondShip, 0, 0, false);
    expect(gameboard.board).toStrictEqual(board);
});

it('does not place a ship at vertical coordinates when coordinates occupied', () => {
    const firstShip = new Ship(4);
    const secondShip = new Ship(3);

    const board = [...Array(10)].map(x => Array(10).fill(null));
    board[1][2] = firstShip;
    board[1][3] = firstShip;
    board[1][4] = firstShip;
    board[1][5] = firstShip;

    const gameboard = new Gameboard();
    gameboard.placeShip(firstShip, 1, 2, false);
    gameboard.placeShip(secondShip, 0, 3, true);
    expect(gameboard.board).toStrictEqual(board);
});

it('returns true when receives attack at occupied coordinates', () => {
    const ship = new Ship(4);

    const gameboard = new Gameboard();
    gameboard.placeShip(ship, 0, 2, false);
    
    expect(gameboard.receiveAttack(0, 2)).toBe(true);
});

it('receives attack at occupied coordinates', () => {
    const ship = new Ship(4);
    const gameboard = new Gameboard();

    gameboard.placeShip(ship, 0, 2, false);
    gameboard.receiveAttack(0, 2);

    expect(ship.hits.length).toBe(1);
});

it('returns false when receives attack at occupied coordinates more than once', () => {
    const ship = new Ship(4);
    const gameboard = new Gameboard();

    gameboard.placeShip(ship, 0, 2, false);
    gameboard.receiveAttack(0, 2);

    expect(gameboard.receiveAttack(0, 2)).toBe(false);
});

it('does not receive attack at occupied coordinates more than once', () => {
    const ship = new Ship(4);
    const gameboard = new Gameboard();

    gameboard.placeShip(ship, 0, 2, false);
    gameboard.receiveAttack(0, 2);
    gameboard.receiveAttack(0, 2);

    expect(ship.hits.length).toBe(1);
});

it('tracks missed attacks', () => {
    const board = [...Array(10)].map(x => Array(10).fill(null));
    board[0][2] = -1;

    const gameboard = new Gameboard();
    gameboard.receiveAttack(0, 2);
    
    expect(gameboard.board).toStrictEqual(board);
});

it('reports not all ships have been sunk', () => {
    const carrier = new Ship(5);
    const battleship = new Ship(4);
    const destroyer = new Ship(3);
    const submarine = new Ship(3);
    const patrolBoat = new Ship(2);

    const gameboard = new Gameboard();
    gameboard.placeShip(carrier, 4, 9, false);
    gameboard.placeShip(battleship, 0, 2, true);
    gameboard.placeShip(destroyer, 5, 2, false);
    gameboard.placeShip(submarine, 9, 5, true);
    gameboard.placeShip(patrolBoat, 0, 0, false);

    expect(gameboard.allShipsAreSunk()).toBe(false);
});