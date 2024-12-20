'use strict'
// 1)
const inputs = document.querySelectorAll('.f');
const firstInput = document.querySelector('#first-input');
const secondInput = document.querySelector('#second-input');

inputs.forEach(elem => {
    elem.addEventListener('input', e => {
        firstInput.classList.remove('more');
        secondInput.classList.remove('more');
        if (firstInput.value.length > secondInput.value.length) firstInput.classList.add('more');
        else if (firstInput.value.length < secondInput.value.length) secondInput.classList.add('more');
        else if (firstInput.value.length === secondInput.value.length) {
            firstInput.classList.add('more');
            secondInput.classList.add('more');
        };
    });
});

// 2)
function toUpper(text) {
    let newText = `${text[0].toUpperCase()}`;
    for (let i = 1; i < text.length; i++)
        newText += text[i];
    return newText;
}

console.log(toUpper('abc'));

// 3)
const letters = ['a', 'e', 'i', 'o', 'u', 'q', 'y'];
let count = 0;
const text = 'Lorem, ipsum';
Array.from(text).forEach(elem => {
    if (letters.includes(elem)) count++;
});

console.log(count);

// 4)
const spamInput = document.querySelector('#spam');
const spamMes = document.querySelector('#spam + p');
const spamWords = ['100%', 'for free', 'only today'];

function checkSpam(text) {
    let i = 0;
    spamWords.forEach(elem => {
        if (text.indexOf(elem) != -1) i++;
    })
    return i;
}

spamInput.addEventListener('input', e => {
    spamInput.style.backgroundColor = '#fff';
        spamMes.innerHTML = '';
    if (checkSpam(spamInput.value)) {
        spamInput.style.backgroundColor = '#ff0000';
        spamMes.innerHTML = 'This text has spam';
    }
});

// 5)
let maxLength = 10, str = 'Lorem ipsum dolor sit amet.';

function cutString(text, length) {
    let cutText = '';
    if (text.length > length) {
        for (let i = 0; i < length - 3; i++) {
            cutText += text[i];
        }
        text = cutText += '...';
    }
    return text;
}

console.log(cutString(str, maxLength));

// 6)
const fInput = document.querySelector('#f-input');
const sInput = document.querySelector('#s-input');
let sMes = document.querySelector('#s-input + p');

function getTextInfo(sentence, letter) {
    const reg = new RegExp(`${letter}`, "g");
    console.log(Array.from(sentence.matchAll(reg)));
    return Array.from(sentence.matchAll(reg));
}

fInput.addEventListener('input', (e) => {
    const arr = getTextInfo(fInput.value, sInput.value[0]);
    if (arr.length != 0) {
        let str = '';
        arr.forEach(elem => {
            str += `${elem.index} `;
        });
        str += `; Number of innerness is ${arr.length}`;
        sMes.innerHTML = str;
    }
    else {
        sMes.innerHTML = 'No matches';
    }
});

// 7)
const time = {
    seconds: document.querySelector('.span-second'),
    minutes: document.querySelector('.span-minute'),
    hours: document.querySelector('.span-hour'),
}
const inputHour = document.querySelector('#hour');
const inputMinute = document.querySelector('#minute');
const inputSecond = document.querySelector('#second');
const timeBtn = document.querySelector('.time-btn');

function addSeconds() {
    if (+time.seconds.innerHTML + +inputSecond.value >= 60) {
        time.minutes.innerHTML = +time.minutes.innerHTML + 1;
        time.seconds.innerHTML = +time.seconds.innerHTML + +inputSecond.value - 60;
    }
    else {
        time.seconds.innerHTML = +time.seconds.innerHTML + +inputSecond.value;
    }
}

function addNinutes() {
    if (+time.minutes.innerHTML + +inputMinute.value >= 60) {
        time.hours.innerHTML = +time.hours.innerHTML + 1;
        time.minutes.innerHTML = +time.minutes.innerHTML + +inputMinute.value - 60;
    }
    else {
        time.minutes.innerHTML = +time.minutes.innerHTML + +inputMinute.value;
    }
}

function addHours() {
    if (+time.hours.innerHTML + +inputHour.value >= 24) {
        time.hours.innerHTML = +time.hours.innerHTML + +inputHour.value - 24;
    }
    else {
        time.hours.innerHTML = +time.hours.innerHTML + +inputHour.value;
    }
}

timeBtn.addEventListener('click', e => {
    addSeconds();
    addNinutes();
    addHours();
});

// 8)
const table = document.querySelector('tbody');
const productInput = document.querySelector('.product');
const quantityInput = document.querySelector('.quantity');
const addProductButton = document.querySelector('.add-product');
const buyProductInput = document.querySelector('.buy-product');
const buyProductButton = document.querySelector('.buy-product-btn');
const unsold = [], sold = [];

function CreateProduct(name, num) {
    return {
        name: name,
        quantity: num,
        isSold: false,
    }
}

function createTable() {
    table.innerHTML = '';
    unsold.forEach(elem => {
        table.innerHTML += `
            <tr class="unsold">
                <td>${elem.name}</td>
                <td>${elem.quantity}</td>
                <td>${elem.isSold}</td>
            </tr>
        `;
    });
    sold.forEach(elem => {
        table.innerHTML += `
            <tr class="sold">
                <td>${elem.name}</td>
                <td>${elem.quantity}</td>
                <td>${elem.isSold}</td>
            </tr>
        `;
    });
}

function addProduct(name, quantity) {
    let has = false;
    unsold.forEach(elem => {
        if (elem.name === name) {
            elem.quantity += quantity;
            has = true;
        }
    });
    if (!has)
        unsold.push(CreateProduct(name, quantity));
}

addProductButton.addEventListener('click', e => {
    addProduct(productInput.value, +quantityInput.value);
    createTable();
});

buyProductButton.addEventListener('click',  e => {
    let index = -1;
    unsold.forEach((elem, ind) => {
        if (elem.name === buyProductInput.value) {
            elem.isSold = true;
            index = ind;
        }
    });
    if (index != -1) {
        sold.push(unsold.splice(index, 1)[0]);
        createTable();
    }
})

// 9)
const bill = [
    ['CocaCola', 10, 30],
    ['Pizza', 3, 100],
    ['Apples', 30, 5],
    ['Plum', 10, 4],
    ['Eggs', 30, 3],
    ['Avocado', 10, 15],
    ['Knife', 2, 200],
    ['Ball', 1, 800],
    ['Salmon', 4, 230],
    ['Pen', 10, 10],
]

const showbillBtn = document.querySelector('.show-bill');
const billList = document.querySelector('.bill-list');
const sumBtn = document.querySelector('.sum');
const sumText = document.querySelector('.sum-text');
const richBtn = document.querySelector('.richest');
const richText = document.querySelector('.rich-text');
const avgBtn = document.querySelector('.avrage');
const avgText = document.querySelector('.avrage-text');

function showBull() {
    billList.innerHTML = `Name  Quantity  Price<br>`;
    bill.forEach(elem => {
        billList.innerHTML += `${elem[0]}  ${elem[1]}X  ${elem[2]}грн.<br>`;
    });
}

showbillBtn.addEventListener('click', showBull);

function getSum() {
    const sum = bill.reduce((value, elem) => value += elem[1] * elem[2], 0);
    sumText.innerHTML = `Total sum is ${sum}`;
}

sumBtn.addEventListener('click', getSum);

function getRichest() {
    let richest = bill[bill.length - 1];
    bill.forEach(elem => {
        if (elem[2] > richest[2]) richest = elem;
    });
    richText.innerHTML = `The richest product is ${richest[0]}. Cost is ${richest[2]}грн.`;
}

richBtn.addEventListener('click', getRichest);

function getAvg() {
    const sum = bill.reduce((value, elem) => value += elem[2], 0);
    avgText.innerHTML = `The avrage price is ${sum / bill.length}грн.`;
}

avgBtn.addEventListener('click', getAvg);