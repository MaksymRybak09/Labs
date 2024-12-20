'use strict';
// 1)
class ModalWindow {
    constructor() {
        this.fade = document.createElement('div');
        this.fade.classList.add('fade', 'hidden');
        
        this.modalWindow = document.createElement('div');
        this.modalWindow.classList.add('modal-window');

        this.isDragging = false;
        this.offsetX = 0;
        this.offsetY = 0;

        this.fade.addEventListener('mousedown', this.onMouseDown.bind(this));
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('mouseup', this.onMouseUp.bind(this));
    }
    
    addContent(content) {
        this.modalWindow.innerHTML = content;
        this.fade.innerHTML = '';
        this.fade.appendChild(this.modalWindow);
    }

    show() {
        document.body.appendChild(this.fade);
        this.fade.classList.remove('hidden');
    }
    
    close() {
        document.body.removeChild(this.fade);
        this.fade.classList.add('hidden');
    }

    onMouseDown(event) {
        if (event.target === this.modalWindow) {
            this.isDragging = true;
            this.offsetX = event.clientX - this.modalWindow.offsetLeft;
            this.offsetY = event.clientY - this.modalWindow.offsetTop;
        }
    }

    onMouseMove(event) {
        if (this.isDragging) {
            this.modalWindow.style.left = event.clientX - this.offsetX + 'px';
            this.modalWindow.style.top = event.clientY - this.offsetY + 'px';
        }
    }

    onMouseUp() {
        this.isDragging = false;
    }
}

const modalWindowBlock = document.querySelector('.modal-window-block');
const modalWindow = new ModalWindow();

modalWindow.addContent(`<p>Some modal window text</p>`);

modalWindowBlock.innerHTML = '';
modalWindowBlock.appendChild(modalWindow.fade);
// modalWindow.show()
// modalWindow.close()

// 2)
class Slider {
    constructor(selector) {
        this.slider = document.querySelector(selector);
        this.slides = this.slider.querySelectorAll('.slide');
        this.currentIndex = 0;
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    addSlide(imageSrc) {
        const newSlide = document.createElement('div');
        newSlide.classList.add('slide');

        const img = document.createElement('img');
        img.src = imageSrc;

        newSlide.appendChild(img);
        this.slider.appendChild(newSlide);
        this.slides = this.slider.querySelectorAll('.slide');
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(this.currentIndex);
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentIndex);
    }
}

// Usage
const mySlider = new Slider('.slider');

mySlider.addSlide('img/Jupiter.jpg');
mySlider.addSlide('img/Earth.jpg');
mySlider.addSlide('img/Mars.jpg');
mySlider.nextSlide();
// mySlider.nextSlide();
// mySlider.nextSlide();

// 3)
class Table {
    constructor(container) {
        this.container = container
        this.table = document.createElement('table');
        this.container.appendChild(this.table);
    }

    addRow(data) {
        const row = this.table.insertRow();
        data.forEach(cellData => {
            const cell = row.insertCell();
            cell.textContent = cellData;
        });
    }

    addColumn(data) {
        const rows = this.table.rows;
        data.forEach((cellData, rowIndex) => {
            if (!rows[rowIndex]) {
                const row = this.table.insertRow();
                rows[rowIndex] = row;
            }

            const cell = rows[rowIndex].insertCell();
            cell.textContent = cellData;
        });
    }
}

const tableBloc = document.querySelector('.table-block');
const myTable = new Table(tableBloc);

myTable.addRow(['a', 'c', 'e']);
myTable.addRow(['b', 'd', 'f']);

myTable.addColumn(['a', 'b']);
myTable.addColumn(['c', 'd']);

// 4)
class Form {
    constructor(form) {
        this.form = form;
        this.fields = [];
        this.submitHandlers = [];
    }

    addField(type, label, id, validationFn) {
        const field = document.createElement('input');
        field.type = type;
        field.id = id;
        const labelElement = document.createElement('label');
        labelElement.textContent = label;
        labelElement.appendChild(field);
        this.fields.push({ element: field, validationFn });
        this.form.appendChild(labelElement);
    }

    addButton(label, clickHandler) {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = label;
        button.addEventListener('click', clickHandler);
        this.form.appendChild(button);
    }

    addSubmitHandler(handler) {
        this.submitHandlers.push(handler);
    }

    validate() {
        for (const field of this.fields) {
            if (field.validationFn && !field.validationFn(field.element.value)) {
                return false;
            }
        }
        return true;
    }

    submit() {
        if (this.validate()) {
            for (const handler of this.submitHandlers) {
                handler(this.getData());
            }
        } else {
            console.log('Form validation failed.');
        }
    }

    getData() {
        const data = {};
        for (const field of this.fields) {
            data[field.element.id] = field.element.value;
        }
        return data;
    }

    init() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.submit();
        });
    }
}

const formBody = document.querySelector('.form');

const myForm = new Form(formBody);
myForm.addField('text', 'Name:', 'name', (value) => value.length > 0);
myForm.addField('email', 'Email:', 'email', (value) => /\S+@\S+\.\S+/.test(value));
myForm.addButton('Submit', (event) => {
    console.log('Custom submit handler');
    myForm.submit();
});
myForm.addSubmitHandler((data) => {
    console.log('Form submitted with data:', data);
});

myForm.init();

// 5)
class Tab {
    constructor(tabContainer, contentContainer) {
        this.tabContainer = tabContainer;
        this.contentContainer = contentContainer;
        this.tabs = [];
    }

    addTab(tabText, content) {
        const tabId = this.tabs.length + 1;

        const tab = document.createElement('div');
        tab.id = `tab-${tabId}`;
        tab.classList.add('tab');
        tab.textContent = tabText;
        tab.addEventListener('click', () => this.showContent(tabId));

        this.tabContainer.appendChild(tab);
        this.tabs.push(tabId);

        const contentBlock = document.createElement('div');
        contentBlock.id = `content-${tabId}`;
        contentBlock.classList.add('content');
        contentBlock.innerHTML = content;

        this.contentContainer.appendChild(contentBlock);

        if (this.tabs.length === 1) {
            this.showContent(tabId);
        }
    }

    showContent(tabId) {
        for (const tab of this.tabs) {
            const contentBlock = document.getElementById(`content-${tab}`);
            const tabElement = document.getElementById(`tab-${tab}`);
            if (tab === tabId) {
                contentBlock.classList.add('active');
                tabElement.classList.add('active');
            } else {
                contentBlock.classList.remove('active');
                tabElement.classList.remove('active');
            }
        }
    }
}

const tabContainer = document.querySelector('.tab-container');
const contentContainer = document.querySelector('.content-container');

const myTabs = new Tab(tabContainer, contentContainer);
myTabs.addTab('Tab 1', '<h2>Tab 1</h2><p>Tab 1 some text</p>');
myTabs.addTab('Tab 2', '<h2>Tab 2</h2><p>Tab 2 some text</p>');
myTabs.addTab('Tab 2', '<h2>Tab 3</h2><p>Tab 3 some text</p>');

// 6)
class Notification {
    constructor(container) {
        this.container = container;
    }

    show(message) {
        const notification = document.createElement('div');
        notification.className = 'notification show';
        notification.textContent = message;

        this.container.querySelector('.not').appendChild(notification);

        return notification;
    }

    delete(notification) {
        if (notification && notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }
}

const notificationBlock = document.querySelector('.notification-block');
const notification = new Notification(notificationBlock);

document.querySelector('.create-not').addEventListener('click', () => {
    const notElement = notification.show('This is a notification!');

    document.querySelector('.delete-not').addEventListener('click', () => {
        notification.delete(notElement);
    });
});