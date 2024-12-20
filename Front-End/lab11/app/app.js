'use strict'
// 1)
const addPhotoButton = document.querySelector('.add-photo-button');
const fullScreenButton = document.querySelector('.full-screen-button');
const photoBlock = document.querySelector('.photo-block');
let fullScreenExitButton;

// 3)
let images = JSON.parse(localStorage.getItem('images')) || [];
if (images != undefined) {
    images.forEach(img => photoBlock.innerHTML += img);
}

addPhotoButton.addEventListener('click', e => {
    let imageURL, status;

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(object => object.json())
        .then(imageObject => {
            imageURL = `${imageObject.message}`
            status = imageObject.status;
            if (imageURL != undefined && status === 'success') {
                const img = `<img src="${imageURL}">`
                photoBlock.innerHTML += img;

                images.push(img);
                localStorage.setItem('images', JSON.stringify(images));
            }
        })
        .catch(err => console.log(err));
});

// 2)
fullScreenButton.addEventListener('click', e => {
    photoBlock.requestFullscreen();

    fullScreenExitButton = document.querySelector('.full-screen-exit-button');
    
    fullScreenExitButton.addEventListener('click', e => {
        document.exitFullscreen();
    });
});

// 4)
const tablo = document.querySelector('.tablo');
const time = {
    second: 0,
    minute: 0,
    hour: 0,
}
let timerID;

function setTime() {
    time.second += 1;

    if (time.second >= 60) {
        time.minute += 1;
        time.second = 0;
    } 
    if (time.minute >= 60) {
        time.hour += 1;
        time.minute = 0;
    } 

    tablo.textContent = `${time.hour}:${time.minute}:${time.second}`;
}

function startInterval() {
    if (document.visibilityState === 'visible') {
        timerID = setInterval(setTime, 1000);
    }
}
startInterval();

document.addEventListener('visibilitychange', e => {
    if (document.visibilityState === 'hidden') {
        clearInterval(timerID);
    }
    startInterval();
});

// 5)
const latitude = document.querySelector('.latitude');
const longitude = document.querySelector('.longitude');

navigator.geolocation.watchPosition(pos => {
    latitude.textContent = pos.coords.latitude;
    longitude.textContent = pos.coords.longitude;
});