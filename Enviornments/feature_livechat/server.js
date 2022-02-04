
const express = require('express');
const app = express();
const http = require('http');

const cors = require('cors');


app.use('/static', express.static('./static/'));

const server = http.createServer(app);

const io = require('socket.io')(server);

server.listen(port=8080, () => {
    console.log('listening on port ${port}');
});

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/chat.html')     // sends the html file to client when the path "localhost:8080/" is accessed
})

io.on('connection', socket => {
    console.log('user connected.');
    socket.on('new_chat', message => {
        socket.broadcast.emit('chat_message', message);
    });
})