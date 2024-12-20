'use strict'
// 1)
const countryCheckbox = document.querySelectorAll('.country-checkbox');
const countryField = document.querySelector('.country-output');
const countryButton = document.querySelector('.country-button');

countryButton.addEventListener('click', e => {
    let countryFieldText = 'Countries: '
    countryCheckbox.forEach(elem => {
        if (elem.checked) {
            countryFieldText += elem.value + ' ';
        }
    })
    countryField.innerHTML = countryFieldText;
});

// 2)
const foodCheckbox = document.querySelectorAll('.food-checkbox');
const foodField = document.querySelector('.food-output');

foodCheckbox.forEach(elem => {
    elem.addEventListener('click', e => {
        let foodFieldText = 'Food: '
        foodCheckbox.forEach(item => {
            if (item.checked) {
                foodFieldText += item.value + ' ';
            }
        })
        foodField.innerHTML = foodFieldText;
    });
})

// 3)
const mathProgressBar = document.querySelector('.math-progress-bar');
const mathTask = document.querySelector('.math-task');
const mathInput = document.querySelectorAll('.math-input');
const mathResult = document.querySelector('.math-result');
let progress = 0, answer = 0;

function showProgress(progress) {
    mathProgressBar.innerHTML = `Progress: ${progress === 0 ? '' : progress}0% (${progress} right answers out of 10)`;
}

showProgress(progress);

function getTask(answer) {
    let num1;
    let num2;
    do {
        num1 = Math.round(Math.random() * 100) % 9 + 1;
        num2 = Math.round(Math.random() * 100) % 9 + 1;
    } while (num1 * num2 === answer);
    if (answer === 0) {
        mathTask.innerHTML = `${num1} × ${num2}`;
    }
    return num1 * num2;
}

function getVariants(answer) {
    const answerInput = Math.round(Math.random() * 100) % 4;
    mathInput.forEach((elem, index) => {
        if (index === answerInput) {
            elem.nextElementSibling.innerHTML = answer;
        } else {
            elem.nextElementSibling.innerHTML = getTask(answer);
        }
    })
    return answer;
}

answer = getVariants(getTask(answer));

function clearInputs() {
    mathInput.forEach(elem => elem.checked = false);
}

function rightAnswer() {
    progress++;
    showProgress(progress);
    setTimeout(clearInputs, 300);
    if (progress === 10) {
        mathResult.innerHTML = 'You won'
        return;
    }
    answer = getVariants(getTask(0));
}

function wrongAnswer() {
    progress = 0;
    showProgress(progress);
    setTimeout(clearInputs, 300);
    mathResult.innerHTML = `You failed. The right answer is ${answer}`;
}

mathInput.forEach(elem => {
    elem.addEventListener('click', e => {
        +e.target.nextElementSibling.innerHTML === answer ? rightAnswer() : wrongAnswer();
    })
})

// 4)
const mathTwoProgressBar = document.querySelector('.math-two-progress-bar');
const mathTwoTask = document.querySelector('.math-two-task');
const mathTwoInput = document.querySelector('.math-two-input');
const mathTwoCheckButton = document.querySelector('.math-two-check-button');
const mathTwoResult = document.querySelector('.math-two-result');
let progressTwo = 0, answerTwo = 0;

function showProgressTwo(progress) {
    mathTwoProgressBar.innerHTML = `Progress: ${progress === 0 ? '' : progress}0% (${progress} right answers out of 10)`;
}

showProgressTwo(progressTwo);

function getTaskTwo(answer) {
    let num1;
    let num2;
    do {
        num1 = Math.round(Math.random() * 100) % 9 + 1;
        num2 = Math.round(Math.random() * 100) % 9 + 1;
    } while (num1 * num2 === answer);
    mathTwoTask.innerHTML = `${num1} × ${num2}`;
    return num1 * num2;
}

answerTwo = getTaskTwo(answerTwo);

function clearInput() {
    mathTwoInput.value ='';
}

function rightAnswerTwo() {
    progressTwo++;
    showProgressTwo(progressTwo);
    clearInput();
    mathTwoResult.innerHTML = `Success`;
}

function wrongAnswerTwo() {
    progressTwo = 0;
    showProgressTwo(progressTwo);
    clearInput();
    mathTwoResult.innerHTML = `Failed. The right answer is ${answerTwo}`;
}

mathTwoCheckButton.addEventListener('click', e => {
    if (+mathTwoInput.value === answerTwo) {
        rightAnswerTwo();
        if (progressTwo === 10) {
            mathTwoResult.innerHTML = 'You won'
        } else {
            answerTwo = getTaskTwo(answerTwo);
        }
    } else {
        wrongAnswerTwo();
        answerTwo = getTaskTwo(answerTwo);
    }
})

// 5)
document.querySelector('.img-table').addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
        e.target.classList.toggle('black-and-white-image');
    }
})

// 6)
const inputs = document.querySelectorAll('.input');

inputs.forEach(elem => {
    elem.addEventListener('focus', e => {
        inputs.forEach(item => {
            item.parentElement.classList.remove('block-focus');
        })
        elem.parentElement.classList.add('block-focus');
    });
})

// 7)
const constrInputs = document.querySelectorAll('.constr-block__input');
const constrInputWidth = document.querySelector('.constr-block__input--width');
const constrInputWidthSpan = document.querySelector('.constr-block--width-ind');
const constrInputHeight = document.querySelector('.constr-block__input-height');
const constrInputHeightSpan = document.querySelector('.constr-block--height-ind');
const constrInputRotate = document.querySelector('.constr-block__input--rotate');
const constrInputRotateSpan = document.querySelector('.constr-block--rotate-ind');
const constrBlockRectangle = document.querySelector('.constr-block__rectangle');

constrBlockRectangle.style.width = `${constrInputWidth.value}px`;
constrInputWidthSpan.innerHTML = `${constrInputWidth.value}`;
constrBlockRectangle.style.height = `${constrInputHeight.value}px`;
constrInputHeightSpan.innerHTML = `${constrInputHeight.value}`;
constrBlockRectangle.style.transform = `rotate(${constrInputRotate.value}deg)`;
constrInputRotateSpan.innerHTML = `${constrInputRotate.value}`;

constrInputs.forEach(elem => {
    elem.addEventListener('input', e => {
        constrBlockRectangle.style.width = `${constrInputWidth.value}px`;
        constrInputWidthSpan.innerHTML = `${constrInputWidth.value}`;
        constrBlockRectangle.style.height = `${constrInputHeight.value}px`;
        constrInputHeightSpan.innerHTML = `${constrInputHeight.value}`;
        constrBlockRectangle.style.transform = `rotate(${constrInputRotate.value}deg)`;
        constrInputRotateSpan.innerHTML = `${constrInputRotate.value}`;

    });
});

// 8)
const sizeImg = document.querySelector('.img-normal-size');
sizeImg.addEventListener('click', e => {
    sizeImg.classList.toggle('img-big-size');
})

// 9)
const shirtInput = document.querySelector('.shirt');
const shirtButton = document.querySelector('.order-shirt');
const pantsInput = document.querySelector('.pants');
const pantsButton = document.querySelector('.order-pants');
const shoesInput = document.querySelector('.shoes');
const shoesButton = document.querySelector('.order-shoes');

function addQuantity(input) {
    input.innerHTML = +input.innerHTML + 1;
}

shirtButton.addEventListener('click', e => {
    addQuantity(shirtInput);
})

pantsButton.addEventListener('click', e => {
    addQuantity(pantsInput);
})

shoesButton.addEventListener('click', e => {
    addQuantity(shoesInput);
})

// 10)
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
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

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);