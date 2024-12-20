const yargs = require('yargs');
const user = require('./user');

yargs.command({
    command: 'add',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        },
        level: {
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        user.add({"title": argv.title, "level": argv.level});
    }
});

yargs.command({
    command: 'remove',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        user.remove(argv.title);
    }
});

yargs.command({
    command: 'list',
    handler() {
        user.list();
    }
});

yargs.command({
    command: 'read',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        user.read(argv.title);
    }
});

yargs.parse();