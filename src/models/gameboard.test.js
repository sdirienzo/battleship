import { expect, it } from "@jest/globals";
import Gameboard from "./gameboard";

it('initializes 10x10 gameboard', () => {
    const array = [...Array(10)].map(x=>Array(10).fill(null))    
    const gameboard = new Gameboard();
    expect(gameboard.board).toStrictEqual(array);
});