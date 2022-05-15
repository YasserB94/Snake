import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeHitSelf } from './snakeScripts/snake.js';
import { update as updateFood, draw as drawFood } from './snakeScripts/food.js'
import { game_state_over as gameOver, gameStateController, game_state_paused as gamePaused } from './snakeScripts/controls.js'
import { positionOutOfGrid } from './snakeScripts/gameBoard.js';

//Var to support gameLoop
let lastTimeSnakeGameFuncExecuted;
//Frames per second
const game_speed = 5;
//GameBoard
const gameBoard = document.getElementById('game-board');
export function startGame() {
    window.requestAnimationFrame(snakeGame);
  
}
function snakeGame(currentTime) {
    checkGameOver()
    if (gameOver) return;
    //Ask the browser when the function can be run - returns ms
    window.requestAnimationFrame(snakeGame);
    //Calculate last time the function was ran in seconds
    const secondsSinceLastRan = (currentTime - lastTimeSnakeGameFuncExecuted) / 1000;
    //Exit if it the frames/second have been reached
    if (secondsSinceLastRan < 1 / game_speed) return;
    if (gamePaused) return;
    console.log('-----Frame ran------')
    lastTimeSnakeGameFuncExecuted = currentTime;
    update()
    draw()
}
//Update the logic for the game
function update() {
    updateSnake();
    updateFood();
}
//Update the Dom
function draw() {
    //Clear drawings from last frame
    gameBoard.innerHTML = '';
    drawFood(gameBoard);
    drawSnake(gameBoard);
}
function checkGameOver() {
    if (positionOutOfGrid(getSnakeHead())/* || snakeHitSelf()*/) {
        gameStateController('Stop')
    }
}
