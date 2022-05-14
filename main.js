
function snakeGame() {

}
function gameStateController() {

}
const btnPlay = document.getElementById('playButton');
btnPlay.addEventListener('click', () => {
    changeGameState(btnPlay)
});
function changeGameState(btnPlay) {
    const btnContent = btnPlay.innerText;
    console.log(btnContent)
    switch (btnContent) {
        case 'START':
            btnPlay.innerText = 'Stop'
            break;
        case 'STOP':
            btnPlay.innerText = 'Start'
            break
    }


}