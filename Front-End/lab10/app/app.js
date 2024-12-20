'use strict'
// 1)
const textInput = document.querySelector('.textinput');
const checkbox = document.querySelector('.checkbox');
const textarea = document.querySelector('.textarea');

const inputData = () => {
    localStorage.setItem('input data', JSON.stringify({
        textinputValue: textInput.value,
        checkboxValue: checkbox.checked,
        textareaValue: textarea.value,
    }));
};

let localStorageData = JSON.parse(localStorage.getItem('input data'));
if (localStorageData) {
    textInput.value = localStorageData.textinputValue;
    checkbox.checked = localStorageData.checkboxValue;
    textarea.value = localStorageData.textareaValue;
}

textInput.addEventListener('input', inputData);
checkbox.addEventListener('click', inputData);
textarea.addEventListener('input', inputData);

// 2)
const inputjson = document.querySelector('.inputjson');
const buttonjson = document.querySelector('.buttonjson');
const jsonChecker = document.querySelector('.json-checker');
const imageBlock = document.querySelector('.image-block');

// [" img/Earth.jpg "," img/Jupiter.jpg "," img/Mars.jpg "]
buttonjson.addEventListener('click', event => {
    try {
        const inputjsonValue = JSON.parse(inputjson.value);
        jsonChecker.textContent = 'JSON array is valid';
        
        inputjsonValue.forEach(img => {
            const image = document.createElement('IMG');
            image.setAttribute('src', img);
            image.setAttribute('class', 'small-image');
            image.addEventListener('click', event => image.classList.toggle('small-image'));
            imageBlock.appendChild(image);
        });
    } catch (error) {
        console.log(error);
        jsonChecker.textContent = 'JSON array is not valid';
    }
});

// 3)
class Student {
    constructor(firstname, lastname, math, eng, history) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.math = math;
        this.eng = eng;
        this.history = history;
    }
}

class StudentList {
    constructor(studentList) {
        this.studentList = studentList;
    }

    getTable() {
        const table = document.createElement('table');
        const tableRow = document.createElement('tr');
        const tableTitles = ['Firstname', 'Lastname', 'Math', 'English', 'History'];

        tableTitles.forEach(title => {
            const td = document.createElement('td');
            td.textContent = title;
            tableRow.appendChild(td);
        });

        table.appendChild(tableRow);

        this.studentList.forEach(student => {
            const tr = document.createElement('tr');
            
            const tdn = document.createElement('td');
            tdn.textContent = student.firstname;
            tr.appendChild(tdn);
            const tdl = document.createElement('td');
            tdl.textContent = student.lastname;
            tr.appendChild(tdl);
            const tdm = document.createElement('td');
            tdm.textContent = student.math;
            tr.appendChild(tdm);
            const tde = document.createElement('td');
            tde.textContent = student.eng;
            tr.appendChild(tde);
            const tdh = document.createElement('td');
            tdh.textContent = student.history;
            tr.appendChild(tdh);

            table.appendChild(tr);
        });

        return table;
    }
}

class TableStyle extends StudentList {
    constructor(studentList) {
        super(studentList);
        this.totalPoint = 0;
    }

    getTable() {
        const table = document.createElement('table');
        const tableRow = document.createElement('tr');
        const tableTitles = ['Firstname', 'Lastname', 'Math', 'English', 'History', 'Avrage Point'];

        tableTitles.forEach(title => {
            const td = document.createElement('td');
            td.textContent = title;
            tableRow.appendChild(td);
        });

        table.appendChild(tableRow);

        this.studentList.forEach(student => {
            const tr = document.createElement('tr');
            
            const tdn = document.createElement('td');
            tdn.textContent = student.firstname;
            tr.appendChild(tdn);
            const tdl = document.createElement('td');
            tdl.textContent = student.lastname;
            tr.appendChild(tdl);
            const tdm = document.createElement('td');
            tdm.textContent = student.math;
            this.totalPoint += student.math;
            this.getStyle(tdm, student.math);
            tr.appendChild(tdm);
            const tde = document.createElement('td');
            tde.textContent = student.eng;
            this.totalPoint += student.eng;
            this.getStyle(tde, student.eng);
            tr.appendChild(tde);
            const tdh = document.createElement('td');
            tdh.textContent = student.history;
            this.totalPoint += student.history;
            this.getStyle(tdh, student.history);
            tr.appendChild(tdh);
            const tda = document.createElement('td');
            const avgPoint = this.getAvragePoint(student);
            tda.textContent = avgPoint; 
            this.getStyle(tda, avgPoint);
            tr.appendChild(tda);

            table.appendChild(tr);
        });

        return table;
    }

    getAvragePoint(stud) {
        return Math.round((stud.math + stud.eng + stud.history) / 3);
    }

    getStyle(td, point) {
        point >= 3 ? td.classList.add('good-point') : td.classList.add('bad-point');
    }

    getTotalPoint() {
        return Math.round(this.totalPoint / (this.studentList.length * 3));
    }
}

const studentBlock = document.querySelector('.students');
const studentPointBlock = document.querySelector('.students-point');

const students = [
    new Student('Maksym', 'Rybak', 4, 5, 2),
    new Student('Dima', 'Olinyk', 3, 2, 4),
    new Student('Maksym', 'Kravchuk', 2, 1, 1),
];

const table = new TableStyle(students);
studentBlock.appendChild(table.getTable());
studentPointBlock.textContent = `Total point is ${table.getTotalPoint()}`;

// 4)
class Shape {
    static total = 255;

    constructor(width) {
        this.width = width;
    }

    static fill() {
        Shape.total = 255;
    }

    draw() {
        const shape = document.createElement('div');
        shape.setAttribute('class', 'shape');
        shape.style.width = `${this.width}px`;
        shape.style.height = `${this.width}px`;
        shape.style.backgroundColor = `rgb(0, ${Shape.total}, 0)`;
        Shape.total -= 10;
        colorBlock.appendChild(shape);
    }
}

const drawBtn = document.querySelector('.draw');
const fillBtn = document.querySelector('.fill');
const colorBlock = document.querySelector('.color-block');

const shape = new Shape(100);

drawBtn.addEventListener('click', shape.draw.bind(shape));

fillBtn.addEventListener('click', Shape.fill);
