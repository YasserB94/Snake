import { onSnake, growSnake } from './snake.js';
import{randomGridPosition} from './gameBoard.js';
let food = randomFoodPosition()
const food_points = 1;
export function update() {
    if (onSnake(food)) {
        growSnake(food_points)
        food = randomFoodPosition()
    }
}
export function draw(gameBoard) {
    const foodpieceHTML = document.createElement('div');
    foodpieceHTML.style.gridRowStart = food.y;
    foodpieceHTML.style.gridColumnStart = food.x;
    foodpieceHTML.classList.add('food');
    gameBoard.appendChild(foodpieceHTML);
}
function randomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}
