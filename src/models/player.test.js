import { expect, it } from "@jest/globals";
import Player from "./player";
import Gameboard from "./gameboard";

it('identifies human player', () => {
    const humanPlayer = new Player(true);
    expect(humanPlayer.isHuman).toBe(true);
})