import { startGame  } from '../main.js';
//Control Panel
const btnPlay = document.getElementById('playButton');
//Game States
export var game_state_over = false;
export let game_state_paused = false;
//SnakeControl 
let direction = { x: 0, y: 0 }
let lastDirection = { x: 0, y: 0 }
window.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowUp':
            if (lastDirection.y !== 0||game_state_paused||game_state_over) break;
            direction = { x: 0, y: -1 }
            break;
        case 'ArrowDown':
            if (lastDirection.y !== 0||game_state_paused||game_state_over) break;
            direction = { x: 0, y: 1 }
            break;
        case 'ArrowLeft':
            if (lastDirection.x !== 0||game_state_paused||game_state_over) break;
            direction = { x: -1, y: 0 }
            break;
        case 'ArrowRight':
            if (lastDirection.x !== 0||game_state_paused||game_state_over) break;
            direction = { x: 1, y: 0 }
            break;
    }
})
export function getDirection() {
    lastDirection = direction;
    return direction;
}
export function gameStateController(control) {
    console.log('Controller Called')
    /*---Constoller to change game state from playing to paused to stopped--*/
    switch (control) {
        case 'Pause':
            game_state_paused = true;
            direction = { x: 0, y: 0 }
            console.log('Game Paused')
            startGame()
            break;

        case 'Play':
            game_state_over = false;
            game_state_paused = false;
            console.log('Game Started')
            startGame()
            break;

        case 'Start':
            game_state_over = false;
            game_state_paused = false;
            console.log('Game Started')
            startGame()
            break;

        case 'Stop':
            game_state_over = true;
            game_state_paused = true;
            direction = { x: 0, y: 0 }
            btnPlay.innerHTML = 'Start'
            console.log('Game Ended')
            startGame()
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
