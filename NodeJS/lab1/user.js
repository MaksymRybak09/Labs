const fs = require('fs');

const userFile = './user.json';

const validate = (lang) => {
    if (!lang.title || !lang.level) {
        throw new Error('Title and level are required for a language.');
    }
};

const add = (lang) => {
    validate(lang);
    fs.readFile(userFile, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const user = JSON.parse(data);
        user.langs.push(lang);
        fs.writeFile(userFile, JSON.stringify(user), (err) => console.log(err));
    });
};

const remove = (title) => {
    fs.readFile(userFile, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const user = JSON.parse(data);
        user.langs = user.langs.filter(lang => lang.title !== title);
        fs.writeFile(userFile, JSON.stringify(user), (err) => console.log(err));
    });
};

const list = () => {
    fs.readFile(userFile, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const user = JSON.parse(data);
        user.langs.forEach(lang => console.log(`${lang.title}: ${lang.level}`));
    });
};

const read = (title) => {
    fs.readFile(userFile, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const user = JSON.parse(data);
        const lang = user.langs.find(lang => lang.title === title);
        if (lang) {
            console.log(`${lang.title}: ${lang.level}`);
        } else {
            console.log('Language not found.');
        }
    });
};

module.exports = {
    add,
    remove,
    list,
    read
};
