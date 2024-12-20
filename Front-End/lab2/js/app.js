// 1
document.querySelector('body').style.fontFamily = 'Arial';

const p = document.querySelectorAll('p');

p.forEach((elem, index) => {
    elem.style.padding = '5px';
    if (index === 0) {
        elem.style.color = "#f69c15";
        elem.style.backgroundColor = "#fde7c6";
        elem.style.fontSize = '16px';
        elem.style.textAlign = 'center';
    }
    if (index === 1) {
        elem.style.color = "#0000ff";
        elem.style.backgroundColor = "#cdcdfc";
        elem.style.fontSize = '14px';
        elem.style.textAlign = 'right';
    }
    if (index === 2) {
        elem.style.color = "#ff0000";
        elem.style.backgroundColor = "#fccccc";
        elem.style.fontSize = '12px';
        elem.style.textAlign = 'left';
    }
});

// 2
const td = document.querySelectorAll('td');

td.forEach((elem, index) => {
    if (index % 2 != 0) elem.classList.add('selected');
});

// 3
const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aliquid ipsa minima! Earum autem odio, consequatur magni, doloribus et assumenda dolore facilis maiores, omnis ducimus eaque! Veniam at enim alias!';
const secondText = `${text[12]}${text[6]}${text[18]}${text[25]}`;
console.log(secondText);

console.log(text.toLowerCase());

const regex = /in/g;
Array.from(text.matchAll(regex)).forEach(elem => {
    console.log(elem.index);
});

console.log(text.split(' '));

let thirdText = '';
for (let i = text.length - 1; i >= 0; i--)
    thirdText += text[i];
console.log(thirdText);

function toUpper(text) {
    let newText = `${text[0].toUpperCase()}`;
    for (let i = 1; i < text.length; i++)
        newText += text[i];
    return newText;
}

console.log(toUpper('abc'));