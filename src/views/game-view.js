const GRID_SIZE = 360;

class GameView {
    pubSub;
    titleSecion;
    mainSection;
    humanPlayerBoardSection;
    computerPlayerBoardSection;
    humanPlayerBoard;
    computerPlayerBoard;

    constructor(pubSub) {
        this.pubSub = pubSub;
        this.init();
    }

    init() {
        this.setBoardSize();

        const content = this.getElement('#content');

        this.titleSecion = this.createElement('div');
        this.titleSecion.id = 'header-section';

        let title = this.createElement('h1');
        title.innerText = 'BATTLESHIP';

        this.titleSecion.append(title);

        this.mainSection = this.createElement('div');
        this.mainSection.id = 'main-section';

        this.humanPlayerBoardSection = this.createElement('div');
        this.humanPlayerBoardSection.id = 'human-board-section';

        this.computerPlayerBoardSection = this.createElement('div');
        this.computerPlayerBoardSection.id = 'computer-board-section';

        this.humanPlayerBoard = this.createElement('div');
        this.humanPlayerBoard.id = 'human-board';
        this.humanPlayerBoard.classList.add('board');
        this.humanPlayerBoardSection.append(this.humanPlayerBoard);
        this.mainSection.append(this.humanPlayerBoardSection);

        this.computerPlayerBoard = this.createElement('div');
        this.computerPlayerBoard.id = 'computer-board';
        this.computerPlayerBoard.classList.add('board');
        this.computerPlayerBoardSection.append(this.computerPlayerBoard);
        this.mainSection.append(this.computerPlayerBoardSection);

        content.append(this.titleSecion);
        content.append(this.mainSection);
    }

    subscribeView() {
        this.pubSub.subscribe('display-human-board', this.displayHumanPlayerBoard.bind(this));
        this.pubSub.subscribe('display-computer-board', this.displayComputerPlayerBoard.bind(this));
        this.pubSub.subscribe('game-over', this.displayWinner.bind(this));

        this.applyEventListeners();
    }

    getElement(selector) {
        return document.querySelector(selector);
    }

    createElement(tag, classList) {
        const element = document.createElement(tag);
       
        if (classList) {
            classList.split(' ').forEach(classStr => {
                element.classList.add(classStr); 
            });
        }

        return element;
    }

    setBoardSize() {
        document.documentElement.style.setProperty("--board-rows", 10);
        document.documentElement.style.setProperty("--board-columns", 10);
        document.documentElement.style.setProperty("--cell-height", `${(GRID_SIZE/10)}px`);
        document.documentElement.style.setProperty("--cell-width", `${(GRID_SIZE/10)}px`);
    }

    clearBoard(container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        return;
    }

    displayHumanPlayerBoard(msg, payload) {
        this.clearBoard(this.humanPlayerBoard);

        for (let x = 0; x < payload.gameboard.length; x++) {
            for (let y = 0; y < payload.gameboard[0].length; y++) {
                let newDiv = document.createElement("div");
                newDiv.dataset.x = x;
                newDiv.dataset.y = y;
                newDiv.classList.add("cell");
                if (payload.gameboard[x][y] === null) {
                    newDiv.classList.add("empty");
                } else if (payload.gameboard[x][y] === -1) {
                    newDiv.classList.add("miss");
                } else if (payload.gameboard[x][y].hits.length === 0) {
                    newDiv.classList.add("ship");
                } else {
                    for (let hit of payload.gameboard[x][y].hits) {
                        if (hit.x === x && hit.y === y) {
                            if (newDiv.classList.contains("ship")) {
                                newDiv.classList.remove("ship");
                            }
                            newDiv.classList.add("hit");
                        } else {
                            if (!newDiv.classList.contains("hit")) {
                               newDiv.classList.add("ship");
                            }
                        }
                    }
                }
                this.humanPlayerBoard.appendChild(newDiv);
            }
        }
        return;
    }

    displayComputerPlayerBoard(msg, payload) {
        this.clearBoard(this.computerPlayerBoard);
        
        for (let x = 0; x < payload.gameboard.length; x++) {
            for (let y = 0; y < payload.gameboard[0].length; y++) {
                let newDiv = document.createElement("div");
                newDiv.dataset.x = x;
                newDiv.dataset.y = y;
                newDiv.classList.add("cell");
                if (payload.gameboard[x][y] === null) {
                    newDiv.classList.add("available");
                } else if (payload.gameboard[x][y] === -1) {
                    newDiv.classList.add("miss");
                } else if (payload.gameboard[x][y].hits.length === 0) {
                     newDiv.classList.add("available");
                } else {
                    for (let hit of payload.gameboard[x][y].hits) {
                        if (hit.x === x && hit.y === y) {
                            if (newDiv.classList.contains('available')) {
                                newDiv.classList.remove('available');
                            }
                            newDiv.classList.add("hit");
                        } else {
                            if (!newDiv.classList.contains("hit")) {
                                newDiv.classList.add("available");
                            }
                        }
                    }
                }
                this.computerPlayerBoard.appendChild(newDiv);
            }
        }
        return;
    }

    displayWinner(msg, payload) {
        if (payload.isHuman) {
            alert("Congratulations, you won!");
        } else {
            alert("Sorry, you lost...");
        }
        this.pubSub.publish('start-new-game');
    }

    applyEventListeners() {
        this.computerPlayerBoard.addEventListener('click', ({ target }) => {
            if (target.classList.contains('available')) {
                const attackPayload = {};
                attackPayload.x = parseInt(target.dataset.x);
                attackPayload.y = parseInt(target.dataset.y);
                this.pubSub.publish('attack-made', attackPayload);
            }
        });
    }

}

export default GameView;