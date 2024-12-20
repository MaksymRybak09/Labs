'use strict';
// 1)
const block = document.querySelector('.block:nth-child(1)');
let coord = {};
let isPressed = false;
let square;

function onMouseDown(event) {
    if (event.target.classList.contains('square')) {
        coord.x = event.pageX;
        coord.y = event.pageY;
        isPressed = true;
        square = event.target;
    }
}

document.documentElement.addEventListener('mousedown', onMouseDown);

function moveSquare(square, x, y) {
    const styles = getComputedStyle(square);
    let left = parseInt(styles.left) + x;
    let top = parseInt(styles.top) + y;

    left = Math.min(Math.max(left, 0), block.clientWidth - square.clientWidth);
    top = Math.min(Math.max(top, 0), block.clientHeight - square.clientHeight);

    square.style.left = left + 'px';
    square.style.top = top + 'px';
}

function onMouseMove(event) {
    if (isPressed) {
        const newCoord = {
            x: event.pageX,
            y: event.pageY,
        };
        moveSquare(square, newCoord.x - coord.x, newCoord.y - coord.y);
        coord = newCoord;
    }
}

document.documentElement.addEventListener('mousemove', onMouseMove);

function onMouseUp() {
    isPressed = false;
}

document.documentElement.addEventListener('mouseup', onMouseUp);

// 2)
const circles = document.querySelectorAll('.circle');
let activeCircle = circles[0];

function moveCircle(square, x, y) {
    const styles = getComputedStyle(square);
    let left = parseInt(styles.left) + x;
    let top = parseInt(styles.top) + y;

    left = Math.min(Math.max(left, 0), block.clientWidth - square.clientWidth);
    top = Math.min(Math.max(top, 0), block.clientHeight - square.clientHeight);

    square.style.left = left + 'px';
    square.style.top = top + 'px';
}

function setActiveBlock(newActiveBlock) {
    if (activeCircle !== null && activeCircle.classList.contains('active-circle'))
        activeCircle.classList.remove('active-circle');
    activeCircle = newActiveBlock;
    activeCircle.classList.add('active-circle');
}

function nextBlock() {
    if (activeCircle !== null) {
        let nextTag = activeCircle.nextElementSibling;
        if (nextTag === null || !nextTag.classList.contains('circle'))
            nextTag = document.querySelector('.circle');
        if (!nextTag.classList.contains('circle'))
            return null;
        setActiveBlock(nextTag);
    }
}

function previousBlock() {
    if (activeCircle !== null) {
        let prevTag = activeCircle.previousElementSibling;
        if (prevTag === null || !prevTag.classList.contains('circle'))
            prevTag = document.querySelector('.circle:last-of-type');

        if (!prevTag.classList.contains('circle'))
            return null;
        setActiveBlock(prevTag);
    }
}

function onKeyDown(event) {
    const step = 10;
    switch (event.code) {
        case 'ArrowUp':
            event.preventDefault();
            moveCircle(activeCircle, 0, -step);
            break;
        case 'ArrowDown':
            event.preventDefault();
            moveCircle(activeCircle, 0, step);
            break;
        case 'ArrowLeft':
            event.preventDefault();
            moveCircle(activeCircle, -step, 0);
            break;
        case 'ArrowRight':
            event.preventDefault();
            moveCircle(activeCircle, step, 0);
            break;
        case 'Tab':
            event.preventDefault();
            if (event.shiftKey)
                previousBlock();
            else
                nextBlock();
            break;
    }
}

document.documentElement.addEventListener('keydown', onKeyDown);

// 3)
const buttonBlock = document.querySelector('.button-block');
const button = document.querySelector('.button');

button.addEventListener('mouseenter', event => {
    let dx = Math.round(Math.random() * 1000 % (buttonBlock.clientWidth - button.clientWidth));
    let dy = Math.round(Math.random() * 1000 % (buttonBlock.clientHeight - button.clientHeight));

    button.style.top = dy + 'px';
    button.style.left = dx + 'px';
});

// 4)
const listItems = document.querySelectorAll('.list__item');

document.documentElement.addEventListener('click', event => {
    if (event.target.classList.contains('list__item')) {
        if (!event.ctrlKey && !event.metaKey)
            listItems.forEach(item => item.classList.remove('active'));
        event.target.classList.toggle('active');
    }
});

// 5)
const range = document.querySelector('.range');
const rangeButton = document.querySelector('.range__button');
let isActive = false;

document.documentElement.addEventListener('mousedown', event => {
    if (event.target.classList.contains('range__button')) {
        isActive = true;
    }
});

document.documentElement.addEventListener('mouseup', event => isActive = false);

document.documentElement.addEventListener('mousemove', event => {
    if (isActive) {
        let x = event.pageX;

        x = Math.min(Math.max(x, 0), range.clientWidth - rangeButton.clientWidth);

        rangeButton.style.left = x + 'px';
    }
});