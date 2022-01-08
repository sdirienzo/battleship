import { expect, it } from "@jest/globals";
import Gameboard from "./gameboard";

it('initializes gameboard with 10 rows', () => {
    const gameboard = new Gameboard();
    expect(gameboard.board.length).toBe(10);
});