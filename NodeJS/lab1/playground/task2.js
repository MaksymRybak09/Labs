const fs = require('fs');

const newLine = 'New line!';
const filePath = './playground/task2.txt';

fs.appendFile(filePath, `${newLine}\n`, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Success');
    }
});
