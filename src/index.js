import PubSub from "pubsub-js";
import GameController from "./controllers/game-controller";
import GameView from "./views/game-view";
import GameModel from "./models/game-model";
import './styles/style.css';

const pubSub = PubSub;
const game = new GameController(new GameView(pubSub), new GameModel(pubSub));
game.init();