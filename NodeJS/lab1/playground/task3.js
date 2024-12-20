const os = require('os');
const fs = require('fs');

const userName = os.userInfo().username;

fs.writeFile('./playground/task3.txt', `Hello, ${userName}!`, (err) => {
    if (err) {
        console.error(err);
    }
});