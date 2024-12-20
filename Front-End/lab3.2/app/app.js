'use strict'
// 1)
const texts = document.querySelectorAll('.paragraph')
const lengthes = [];

texts.forEach(elem => {lengthes.push(elem.innerHTML.length);});

console.log(lengthes);

// 1.2)
const arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];
let min = arr[arr.length - 1], max = arr[arr.length - 1], plusCount = 0, minusCount = 0, countNum = 0;

arr.forEach(elem => {
    if (elem > 9) countNum++;

    if (elem > max) max = elem;
    if (elem < min) min = elem;

    if (elem > 0) plusCount++;
    if (elem < 0) minusCount++;
})

console.log(min, max, plusCount, minusCount, countNum);

console.log(arr.sort((a, b) => b - a));
console.log(arr.reverse());

// 2)
const tables = document.querySelectorAll('table');

tables.forEach(elem => {
    elem.querySelectorAll('td').forEach((td, index) => {
        if (index % 2 != 0) td.classList.add('selected');
    })
});

// 3)
const matrix = [
    [-4, 0, 4, 10],
    [1, 1, 1, 10],
    [1, 8, 8, -5],
]
let plusM = 0, zeroR = 0, indexR = [], zeroC = 0, indexC = [], minusC = 0, indexMinusC = [];

matrix.forEach(elem => {
    elem.forEach(subElem => {
        if (subElem > 0) plusM++;
    })
})
console.log(plusM);
console.log('---');

for (let i = 0; i < matrix.length; i++) {
    let zeroes = 0;
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) zeroes++;
    }
    if (zeroes === 0) {
        zeroR++;
        indexR.push(i);
    } 
}

indexR.forEach(elem => {
    let mul = 1;
    for (let j = 0; j < matrix[0].length; j++) {
        mul *= matrix[elem][j];
    }
    console.log(mul);
})

console.log(zeroR);
console.log('---');

for (let i = 0; i < matrix[0].length; i++) {
    let zeroes = 0;
    for (let j = 0; j < matrix.length; j++) {
        if (matrix[j][i] === 0) zeroes++;
    }
    if (zeroes !== 0) {
        zeroC++;
        indexC.push(i);
    } 
}

indexC.forEach(elem => {
    let sum = 0;
    for (let j = 0; j < matrix.length; j++) {
        sum += matrix[j][elem];
    }
    console.log(sum);
})

console.log(zeroC);
console.log('---');


for (let i = 0; i < matrix[0].length; i++) {
    let minuses = 0;
    for (let j = 0; j < matrix.length; j++) {
        if (matrix[j][i] < 0) minuses++;
    }
    if (minuses !== 0) {
        minusC++;
        indexMinusC.push(i);
    } 
}

indexMinusC.forEach(elem => {
    let sum = 0;
    for (let j = 0; j < matrix.length; j++) {
        sum += matrix[j][elem];
    }
    console.log(sum);
})
console.log('---');

const repeat = [];

for (let i = 0; i < matrix.length; i++) {
    let count = 1;
    for (let j = 0; j < matrix[i].length - 1; j++) {
        if (matrix[i][j] === matrix[i][j + 1]) count++;
    }
    repeat.push(count);
}

let repeatMax = repeat[repeat.length - 1], repeatInd = 0;
repeat.forEach(elem => {if (elem > repeatMax) repeatMax = elem})
repeat.forEach((elem, index) => {if (elem === repeatMax) repeatInd = index})
console.log(repeatInd);
console.log('---');

const transMatrix = [];

for (let i = 0; i < matrix[0].length; i++) {
    transMatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
        transMatrix[i].push(matrix[j][i]);
    }
}
console.log(transMatrix);