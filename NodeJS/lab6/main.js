const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const { generateMessage, generateLocationMessage } = require('./utils/messanger');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/public_chat-form.html');
});

app.get('/chat.html', (req, res) => {
    res.sendFile(__dirname + '/public/public_chat.html');
});

io.on('connection', (socket) => {
    socket.on('join', (options, callback) => {
        const { error, user } = addUser({ id: socket.id, ...options });

        if (error) {
            return callback(error);
        }

        socket.join(user.room);

        socket.emit('message', generateMessage('Admin', `Welcome, ${user.username}!`));
        socket.broadcast.to(user.room).emit('message', generateMessage('Admin', `${user.username} has joined!`));
        io.to(user.room).emit('roomData', {
            users: getUsersInRoom(user.room),
        });

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', generateMessage(user.username, message));

        callback();
    });

    socket.on("sendPrivateMessage", (message) => {
        const user = getUser(socket.id);
        const [recipientName, ...text] = message.split(":");
        const recipientUsername = recipientName.substring(1).trim();
        const privateMessage = text.join(":").trim();

        const recipient = getUsersInRoom(user.room).find((u) => u.username.toLowerCase() === recipientUsername.toLowerCase());

        if (recipient) {
            io.to(recipient.id).emit("message", generateMessage(user.username, `Private: ${privateMessage}`));

            socket.emit("message", generateMessage(user.username, `Private: ${privateMessage}`));
        } else {
            socket.emit("message", generateMessage("Admin", `User ${recipientUsername} not found.`));
        }
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', generateMessage('Admin', `${user.username} has left!`));
            io.to(user.room).emit('roomData', {
                users: getUsersInRoom(user.room),
            });
        }
    });

    socket.on('userIsTyping', ({ username }) => {
        const user = getUser(socket.id);
        if (user) {
            socket.broadcast.to(user.room).emit('userIsTyping', { username });
        }
    });

    socket.on('userStoppedTyping', ({ username }) => {
        const user = getUser(socket.id);
        if (user) {
            socket.broadcast.to(user.room).emit('userStoppedTyping', { username });
        }
    });
});

server.listen(3000, function () {
    console.log('http://localhost:3000');
});
