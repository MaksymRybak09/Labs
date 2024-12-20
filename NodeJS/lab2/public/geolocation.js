document.querySelector('.geolocation-link').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        fetch(`http://localhost:3000/weather-geolocation/${latitude}/${longitude}`)
            .then(response => response.json())
            .then(data => {
                const divs = document.querySelectorAll('main > div');

                divs[0].innerHTML = `Погода в місті: ${data.city}<img src="${data.icon}">`;
                divs[1].innerHTML = `Тиск: ${data.pressure}`;
                divs[2].innerHTML = `Вологість: ${data.humidity}`;
                divs[3].innerHTML = `Температура: ${data.temperature}`;
            })
            .catch(error => {
                console.error('Помилка при отриманні даних:', error);
            });
    });
});