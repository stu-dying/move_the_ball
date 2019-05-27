const ball = document.querySelector('.ball');
const field = document.querySelector('.field');
const ballWidth = ball.clientWidth;
const ballHeight = ball.clientHeight;
const fieldWidth = field.clientWidth;
const fieldHeight = field.clientHeight;
const centerOffset = ballWidth / 2;
const borderWidth = field.clientWidth - field.offsetWidth;


function move(event) {
    console.log(borderWidth)
    let fieldBorder = field.getBoundingClientRect();
    let ballTop = event.clientY - fieldBorder.y + borderWidth/2;
    let ballLeft = event.clientX - fieldBorder.x + borderWidth/2;
    ballTop < centerOffset ? ballTop = centerOffset : ballTop;
    ballTop > fieldHeight - centerOffset ? ballTop = (fieldHeight - centerOffset) : ballTop;
    ballLeft < centerOffset ? ballLeft = centerOffset : ballLeft;
    ballLeft > fieldWidth - centerOffset ? ballLeft = (fieldWidth - centerOffset) : ballLeft;
    ball.style.top = `${ballTop - centerOffset}px`;
    ball.style.left = `${ballLeft - centerOffset}px`;
}

field.addEventListener('click', move);
