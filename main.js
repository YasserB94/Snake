import { update as updateSnake,draw as drawSnake} from './snakeScripts/snake.js';

//Game States
let game_state_over = true;
let game_state_paused = true;
//Var to support gameLoop
let lastTimeSnakeGameFuncExecuted;
//Frames per second
const game_speed = 1;
//Control Panel
const btnPlay = document.getElementById('playButton');
//GameBoard
const gameBoard = document.getElementById('game-board');
function snakeGame(currentTime) {
    //Ask the browser when the function can be run - returns ms
    window.requestAnimationFrame(snakeGame);
    //Calculate last time the function was ran in seconds
    const secondsSinceLastRan = (currentTime - lastTimeSnakeGameFuncExecuted) / 1000;
    //Exit if it the frames/second have been reached
    if (secondsSinceLastRan < 1 / game_speed) return;
    if(game_state_over)return;
    if(game_state_paused)return;
    console.log('-----Frame ran------')
    lastTimeSnakeGameFuncExecuted = currentTime;
    update()
    draw()
}

//Update the logic for the game
function update(){
updateSnake();
}
//Update the Dom
function draw(){
drawSnake(gameBoard);
}

//Controls
function gameStateController(control) {
    console.log('Controller Called')
    /*---Constoller to change game state from playing to paused to stopped--*/
    switch (control) {
        case 'Pause':
            game_state_paused = true;
            console.log('Game Paused')
            window.requestAnimationFrame(snakeGame);
            break;

        case 'Play':
            game_state_over =false;
            game_state_paused = false;
            console.log('Game Started')
            window.requestAnimationFrame(snakeGame);
            break;
            
        case 'Start':
            game_state_over =false;
            game_state_paused = false;
            console.log('Game Started')
            window.requestAnimationFrame(snakeGame);
            break;

        case 'Stop':
            game_state_over = true;
            game_state_paused = true;
            btnPlay.innerHTML = 'Start'
            console.log('Game Ended')
            window.requestAnimationFrame(snakeGame);
            break;

    }
}
btnPlay.addEventListener('click', () => {
    //Game control logic for start/pause/play btn
    const controlMsg = btnPlay.innerHTML;
    switch (controlMsg) {
        case 'Start':
            console.log(controlMsg)
            btnPlay.innerHTML = 'Pause';
            gameStateController(controlMsg);
            break;
        case 'Pause':
            console.log(controlMsg)
            btnPlay.innerHTML = 'Play'
            gameStateController(controlMsg)
            break;
        case 'Play':
            console.log(controlMsg)
            btnPlay.innerHTML = 'Pause';
            gameStateController(controlMsg)
            break;
    }
});
