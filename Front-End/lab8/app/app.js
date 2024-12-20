'use strict'
// 1)
const clock = document.querySelector('.clock');

function clockTick() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

clockTick();
setInterval(clockTick, 1000);

// 2)
let timerValues = [];
let timers = Array.from(document.querySelectorAll('.timer'));
let timerCount = timers.length;

for (let i = 0; i < timerCount; i++) {
    timerValues.push({
        h: 2, 
        m: 0, 
        s: 0, 
        timerId : null,
    });
}

function timerTick(index) {
    if (--timerValues[index].s < 0) {
        timerValues[index].s = 59;
        if (--timerValues[index].m < 0) {
            timerValues[index].m = 59;
            if (--timerValues[index].h < 0) {
                clearInterval(timerValues[index].timerId);
                changeButtons(stopButton, resetButton);
                return null;
            }
        }
    }
    timerUpdate(index);
}

function addZero(value) {
    if (value < 10) return '0' + value;
    return value;
}

function timerUpdate(index) {
    let timerNewValue = {
        h: addZero(timerValues[index].h), 
        m: addZero(timerValues[index].m), 
        s: addZero(timerValues[index].s),
    };
    document.querySelectorAll(`.timer`)[index].querySelector('.tablo').innerHTML 
        = `${timerNewValue.h}:${timerNewValue.m}:${timerNewValue.s}`;
}

function changeButtons(buttonOne, buttonTwo) {
    buttonOne.setAttribute('disabled', 'disabled');
    buttonTwo.removeAttribute('disabled');
}

let startButton, stopButton, resetButton;

document.documentElement.addEventListener('click', function (event) {
    let parentTimerDiv = event.target.closest('.timer');

    if (parentTimerDiv !== null) {
        startButton = parentTimerDiv.querySelector('.start-button');
        stopButton = parentTimerDiv.querySelector('.stop-button');
        resetButton = parentTimerDiv.querySelector('.reset-button');
        let currentTimerIndex = timers.indexOf(parentTimerDiv);

        if (event.target.classList.contains('start-button')) {
            timerValues[currentTimerIndex].timerId = setInterval(timerTick, 1, currentTimerIndex);
            changeButtons(startButton, stopButton);
        }
        if (event.target.classList.contains('stop-button')) {
            clearInterval(timerValues[currentTimerIndex].timerId);
            changeButtons(stopButton, startButton);
        }
        if (event.target.classList.contains('reset-button')) {
            timerValues[currentTimerIndex] = {
                h: 2,
                m: 0,
                s: 0,
                timerId : timerValues[currentTimerIndex].timerId,
            };
            changeButtons(stopButton, startButton);
            timerUpdate(currentTimerIndex);
        }
    }
});

// 3)
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(showNextSlide, 1500);

// 4)
const container = document.querySelector('.container');
const squares = container.querySelectorAll('.square');

squares.forEach(square => {
    let x = Math.random() * (container.clientWidth - square.clientWidth);
    let y = Math.random() * (container.clientHeight - square.clientHeight);
    
    let directionX = Math.random() < 0.5 ? 1 : -1;
    let directionY = Math.random() < 0.5 ? 1 : -1;
    
    function moveSquare() {
        x += 2 * directionX;
        y += 2 * directionY;

        if (x < 0 || x + square.clientWidth > container.clientWidth) {
            directionX *= -1;
        }
        if (y < 0 || y + square.clientHeight > container.clientHeight) {
            directionY *= -1;
        }

        square.style.left = x + 'px';
        square.style.top = y + 'px';
    }
    setInterval(moveSquare, 10);
});