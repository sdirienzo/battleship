import { expect, it } from "@jest/globals";
import Player from "./player";
import Gameboard from "./gameboard";
import Ship from "./ship";

it('identifies human player', () => {
    const humanPlayer = new Player(true);
    expect(humanPlayer.isHuman).toBe(true);
});

it('identifies computer player', () => {
    const humanPlayer = new Player(false);
    expect(humanPlayer.isHuman).toBe(false);
});

it('allows player to take valid turn with occupied coordinate', () => {
    const humanPlayer = new Player(true);
    const gameboard = new Gameboard();

    const carrier = new Ship(5);
    const battleship = new Ship(4);
    const destroyer = new Ship(3);
    const submarine = new Ship(3);
    const patrolBoat = new Ship(2);

    gameboard.placeShip(carrier, 9, 4, false);
    gameboard.placeShip(battleship, 2, 0, true);
    gameboard.placeShip(destroyer, 2, 5, false);
    gameboard.placeShip(submarine, 5, 9, true);
    gameboard.placeShip(patrolBoat, 0, 0, false);

    expect(humanPlayer.takeTurn(gameboard, 0, 0)).toBe(true);
});

it('allows player to take valid turn with unoccupied coordinate', () => {
    const humanPlayer = new Player(true);
    const gameboard = new Gameboard();

    const carrier = new Ship(5);
    const battleship = new Ship(4);
    const destroyer = new Ship(3);
    const submarine = new Ship(3);
    const patrolBoat = new Ship(2);

    gameboard.placeShip(carrier, 9, 4, false);
    gameboard.placeShip(battleship, 2, 0, true);
    gameboard.placeShip(destroyer, 2, 5, false);
    gameboard.placeShip(submarine, 5, 9, true);
    gameboard.placeShip(patrolBoat, 0, 0, false);

    expect(humanPlayer.takeTurn(gameboard, 0, 2)).toBe(true);
});

it('doesn\'t allow player to take invalid turn with already attacked occupied coordinate', () => {
    const humanPlayer = new Player(true);
    const gameboard = new Gameboard();

    const carrier = new Ship(5);
    const battleship = new Ship(4);
    const destroyer = new Ship(3);
    const submarine = new Ship(3);
    const patrolBoat = new Ship(2);

    gameboard.placeShip(carrier, 9, 4, false);
    gameboard.placeShip(battleship, 2, 0, true);
    gameboard.placeShip(destroyer, 2, 5, false);
    gameboard.placeShip(submarine, 5, 9, true);
    gameboard.placeShip(patrolBoat, 0, 0, false);

    humanPlayer.takeTurn(gameboard, 0, 0);

    expect(humanPlayer.takeTurn(gameboard, 0, 0)).toBe(false);
});

it('doesn\'t allow player to take invalid turn with already attacked unoccupied coordinate', () => {
    const humanPlayer = new Player(true);
    const gameboard = new Gameboard();

    const carrier = new Ship(5);
    const battleship = new Ship(4);
    const destroyer = new Ship(3);
    const submarine = new Ship(3);
    const patrolBoat = new Ship(2);

    gameboard.placeShip(carrier, 9, 4, false);
    gameboard.placeShip(battleship, 2, 0, true);
    gameboard.placeShip(destroyer, 2, 5, false);
    gameboard.placeShip(submarine, 5, 9, true);
    gameboard.placeShip(patrolBoat, 0, 0, false);

    humanPlayer.takeTurn(gameboard, 0, 2);

    expect(humanPlayer.takeTurn(gameboard, 0, 2)).toBe(false);
});