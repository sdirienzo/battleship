import Player from "./player";
import Gameboard from "./gameboard";
import Ship from "./ship";

class GameModel {
    pubSub;
    humanPlayer;
    humanGameboard;
    computerPlayer;
    computerGameboard;

    constructor(pubSub) {
        this.pubSub = pubSub;
        this.init();
    }

    init() {
        this.humanPlayer = new Player(true);
        this.humanGameboard = new Gameboard();
        this.computerPlayer = new Player(false);
        this.computerGameboard = new Gameboard();
        this.placeHumanShips();
        this.placeComputerShips();
    }

    subscribeModel() {
        this.start();
        this.pubSub.subscribe("attack-made", this.playRound.bind(this));
        this.pubSub.subscribe("start-new-game", this.init.bind(this));
        this.pubSub.subscribe("start-new-game", this.start.bind(this));
    }

    start() {
        let humanPayload = {};
        humanPayload.gameboard = this.humanGameboard.board;
        let computerPayload = {};
        computerPayload.gameboard = this.computerGameboard.board;
        this.pubSub.publish("display-human-board", humanPayload);
        this.pubSub.publish("display-computer-board", computerPayload);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    randomlyPlaceShip(gameboard, ship) {
        let x;
        let y;
        let isVertical;
        do {
            x = this.getRandomInt(0, 10);
            y = this.getRandomInt(0, 10);
            
            let vertical = this.getRandomInt(0, 2);
            vertical === 0 ? isVertical = false : isVertical = true;

        } while (!gameboard.placeShip(ship, x, y, isVertical));
    }

    placeHumanShips() {
        const carrier = new Ship(5);
        const battleship = new Ship(4);
        const destroyer = new Ship(3);
        const submarine = new Ship(3);
        const patrolBoat = new Ship(2);

        this.randomlyPlaceShip(this.humanGameboard, carrier);
        this.randomlyPlaceShip(this.humanGameboard, battleship);
        this.randomlyPlaceShip(this.humanGameboard, destroyer);
        this.randomlyPlaceShip(this.humanGameboard, submarine);
        this.randomlyPlaceShip(this.humanGameboard, patrolBoat);
    }

    placeComputerShips() {
        const carrier = new Ship(5);
        const battleship = new Ship(4);
        const destroyer = new Ship(3);
        const submarine = new Ship(3);
        const patrolBoat = new Ship(2);

        this.randomlyPlaceShip(this.computerGameboard, carrier);
        this.randomlyPlaceShip(this.computerGameboard, battleship);
        this.randomlyPlaceShip(this.computerGameboard, destroyer);
        this.randomlyPlaceShip(this.computerGameboard, submarine);
        this.randomlyPlaceShip(this.computerGameboard, patrolBoat);
    }

    applyComputerAttack() {
        this.computerPlayer.makeRandomAttack(this.humanGameboard);

        let humanPayload = {};
        humanPayload.gameboard = this.humanGameboard.board;

        this.pubSub.publish("display-human-board", humanPayload);
    }

    takeHumanTurn(x, y) {
        this.humanPlayer.takeTurn(this.computerGameboard, x, y);
    }

    takeComputerTurn() {
        this.computerPlayer.takeTurn(this.humanGameboard);
    }

    allComputerShipsAreSunk() {
        return this.computerGameboard.allShipsAreSunk();
    }

    allHumanShipsAreSunk() {
        return this.humanGameboard.allShipsAreSunk();
    }

    playRound(msg, attackCoordinates) {
        let computerPayload = {};
        let humanPayload = {};
        let winner = {};

        this.takeHumanTurn(attackCoordinates.x, attackCoordinates.y);
        computerPayload.gameboard = this.computerGameboard.board;
        this.pubSub.publish("display-computer-board", computerPayload);

        if (this.allComputerShipsAreSunk()) {
            winner.isHuman = this.humanPlayer.isHuman;
            this.pubSub.publish("game-over", winner);
            return;
        }     

        this.takeComputerTurn();
        humanPayload.gameboard = this.humanGameboard.board;
        this.pubSub.publish("display-human-board", humanPayload);

        if (this.allHumanShipsAreSunk()) {
            winner.isHuman = this.computerPlayer.isHuman;
            this.pubSub.publish("game-over", winner);
            return;
        }
    }

}

export default GameModel;