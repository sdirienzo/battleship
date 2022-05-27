class GameController {
    #gameView;
    #gameModel;

    constructor(gameView, gameModel) {
        this.#gameView = gameView;
        this.#gameModel = gameModel;
    }

    init() {
        this.#gameView.subscribeView();
        this.#gameModel.subscribeModel();
    }
}

export default GameController;