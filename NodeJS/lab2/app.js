const express = require('express');
const axios = require('axios');
const hbs = require('hbs');

const app = express();
const port = 3000;
const key = '869fe71e226f791020e6fa1cd9db90b4&units';

app.use(express.static('public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/weather', (req, res) => {
    // res.send('This is the weather page');
    // const weath = {
    //     desc: 'Clear sky!',
    // };
    // res.render('weather.hbs', {weath});
    res.render('weather.hbs');
});

app.get('/weather/:city', async (req, res) => {
    // res.send(`${req.params.city}`);
    const city = req.params.city;

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
        const weatherData = response.data;

        const weath = {
            city: city,
            icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
            temperature: weatherData.main.temp,
            pressure: weatherData.main.pressure,
            humidity: weatherData.main.humidity,
        };
        res.render('weather', weath);
    } catch (error) {
        res.status(500).send('Error retrieving weather data');
    }
});

app.get('/weather-geolocation/:latitude/:longitude', async (req, res) => {
    const latitude = req.params.latitude;
    const longitude = req.params.longitude;
    
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`);
        const weatherData = response.data;

        const weather = {
            city: weatherData.name,
            icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
            temperature: weatherData.main.temp,
            pressure: weatherData.main.pressure,
            humidity: weatherData.main.humidity,
        };

        res.json(weather);
    } catch (error) {
        console.error('Error retrieving weather data:', error);
        res.status(500).send('Error retrieving weather data');
    }ж
});

// app.get('/weather', (req, res) => {
//     res.send(`${req.query.city}`);
// });

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`http://localhost:${port}`);
});