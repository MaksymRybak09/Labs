'use strict'
// 1)
const tableBody = document.querySelector('.table-body');
const formFirstnameInput = document.querySelector('.from-input-firstname');
const formLastnameInput = document.querySelector('.from-input-lastname');
const formButton = document.querySelector('.form-button');
let index = 0;

formButton.addEventListener('click', e => {
    const tableRow = document.createElement('TR');

    const tableNumber = document.createElement('TD');
    tableNumber.innerHTML = ++index;
    const tableFirstname = document.createElement('TD');
    tableFirstname.innerText = formFirstnameInput.value;
    const tableLastname = document.createElement('TD');
    tableLastname.innerText = formLastnameInput.value;

    tableRow.appendChild(tableNumber);
    tableRow.appendChild(tableFirstname);
    tableRow.appendChild(tableLastname);

    tableBody.appendChild(tableRow);
});

// 2)
const textarea = document.querySelector('.textarea');
const matrixButton = document.querySelector('.matrix-button');
const matrixTable = document.querySelector('.matrix-table');

matrixButton.addEventListener('click', e => {
    matrixTable.innerHTML = '';
    const rows = textarea.value.split('\n');
    for (let row of rows) {
        const matrixRow = document.createElement('TR');
        for (let col of row) {
            const matrixDot = document.createElement('TD');
            if (col === '1') {
                matrixDot.setAttribute('class', 'active');
            }
            matrixRow.appendChild(matrixDot);
        }
        matrixTable.appendChild(matrixRow);
    }
});

// 3)
const colors = document.querySelectorAll('.colors__table td');
const colorsBlock = document.querySelector('.colors-block');
const colorArr = [];

colors.forEach(color => {
    color.addEventListener('click', e => {
        if (color.classList.toggle('active')) {
            colorArr.push(window.getComputedStyle(color).backgroundColor);
        }
        if (colorArr.length === 1) {
            colorsBlock.style.backgroundColor = `${colorArr[0]}`;
        }
        let gradient = 'linear-gradient('
        for (let i = 0; i < colorArr.length - 1; i++) gradient += `${colorArr[i]}, `;
        gradient += `${colorArr[colorArr.length - 1]})`;
        colorsBlock.style.background = gradient;
    });
})

// 4)
const deleteTextBlockButton = document.querySelectorAll('.text-block__button--delete');
const editTextBlockButton = document.querySelectorAll('.text-block__button--edit');

deleteTextBlockButton.forEach(btn => {
    btn.addEventListener('click', e => {
        document.querySelector('#' + btn.dataset.name).classList.add('hidden');
    })
})

editTextBlockButton.forEach(btn => {
    btn.addEventListener('click', e => {
        const textBlock = document.querySelector('#' + btn.dataset.name);
        const text = textBlock.querySelector('p');
        const textarea = textBlock.querySelector('textarea');

        text.classList.add('hidden');
        textarea.classList.remove('hidden');
        textarea.value = text.innerText.trim();
        textarea.focus();

        textarea.addEventListener('focusout', e => {
            textarea.classList.add('hidden');
            text.classList.remove('hidden');
            text.innerHTML = textarea.value;
        })
    })
})

// 5)
const drawing = document.querySelectorAll('.drawing__table td');
const drawingBlock = document.querySelectorAll('.drawing-place td');
let drawingColor;

drawing.forEach(dr => {
    dr.addEventListener('click', e => {
        drawing.forEach(drw => drw.classList.remove('active'));
        dr.classList.toggle('active');
        drawingColor = window.getComputedStyle(dr).backgroundColor;
    });
})

drawingBlock.forEach(dr => {
    dr.addEventListener('click', e => {
        dr.style.backgroundColor = drawingColor;
    });
})

// 6)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', e => {
        card.classList.toggle('flipped');
    })
});

// 7)
const commentBlock = document.querySelector('.comment-block');
const nameCommentFromInput = document.querySelector('.comment-from__input--name');
const commentCommentFromInput = document.querySelector('.comment-from__input--comment');
const commentFormButton = document.querySelector('.comment-form__button');

commentFormButton.addEventListener('click', e => {
    commentBlock.innerHTML += `
        <div class="comment">
            <div class="comment__head">
                <div class="comment__aouthor">${nameCommentFromInput.value}</div>
                <div class="comment__date">${new Date().toUTCString()}</div>
            </div>
            <div class="comment__body">
                <p class="comment__text">${commentCommentFromInput.value}</p>
            </div>
        </div>
    `;
});

// 8)
const books = document.querySelectorAll('.books span');

books.forEach(book => {
    book.addEventListener('click', e => {
        books.forEach(b => b.classList.remove('active-book'));
        book.classList.add('active-book');
    });
});