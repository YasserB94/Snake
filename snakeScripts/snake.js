import { getDirection } from "./controls.js";

const snake = [
    { x: 11, y: 11 }
]
let newBodyPieces = 0;
//This will update all the logic
export function update() {
    console.log('UpdateSnake')
    growSnakeBody();
    const direction = getDirection();
    for (let i = snake.length - 2; i >= 0; i--) {
        snake[i + 1] = { ...snake[i] }
    }
    snake[0].x += direction.x;
    snake[0].y += direction.y;
}

//This will take the logic and make sure its displayed visually
export function draw(gameBoard) {
    console.log('drawSnake')
    //Draw a snakepiece for each snake piece in snake
    snake.forEach(snakePiece => {
        const snakePieceHTML = document.createElement('div');
        snakePieceHTML.style.gridColumnStart = snakePiece.x;
        snakePieceHTML.style.gridRowStart = snakePiece.y;

        if (snakePiece === snake[0]) {
            snakePieceHTML.classList.add('snake-head')

        } else if (snakePiece === snake[snake.length]) {
            snakePieceHTML.classList.add('snake-tail')

        } else {
            snakePieceHTML.classList.add('snake-body')
        }
        console.log('Element made')
        gameBoard.appendChild(snakePieceHTML)
    })

}
export function growSnake(amount) {
    newBodyPieces += amount;
}
export function onSnake(position, { ignoreHead = false } = {}) {
    return snake.some((snakePiece, index) => {
        if (ignoreHead && index === 0) return false;
        return positionIsEqual(snakePiece, position)
    })
}
function positionIsEqual(position1, position2) {
    const equalPosition = position1.x === position2.x && position1.y === position2.y;
    return equalPosition;
}
function growSnakeBody() {
    for (let i = 0; i < newBodyPieces; i++) {
        snake.push({ ...snake[snake.length - 1] })
    }
    newBodyPieces = 0;
}
export function getSnakeHead() {
    return snake[0];
}
export function snakeHitSelf() {
return onSnake(snake[0],{ignoreHead:true})
}