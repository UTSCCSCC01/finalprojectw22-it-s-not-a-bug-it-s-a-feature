
const express = require('express');
const app = express();
const http = require('http');

const cors = require('cors');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.use('/static', express.static('./static/'));

const server = http.createServer(app);

const io = require('socket.io')(server);

server.listen(port=8080, '127.0.0.1', () => {
    console.log(`listening on port ${port}`);
});


const rooms = {};     // stores streamers as keys and dictionary of viewers as values

app.get('/', (request, response) =>{
    //response.sendFile(__dirname + '/templates/chat.html')     // sends the html file to client
    response.sendFile(__dirname + '/templates/test_index.html') 
})

app.post('/room', (request, response) =>{      // redirect to corresponding streamer's live chat
    const streamer = request.body.streamer;
    const viewer = request.body.userid;
    // if (rooms[streamer] == null) {
    //     rooms[streamer] = {'normal': {}, 'vip': {}, 'subscribers': {}}  // mutually exclusive lists recording users in a room
    // }                                                                   // format : {socket : userid}
    response.redirect(`/stream/${streamer}`);
})

app.get('/stream/:streamer',(request, response) =>{    
    // redirect to the chatroom of that streamer, which url is http://path/<streamer>/
    // need to send {roomName: request.params.streamer} Object 
    response.sendFile(__dirname + '/templates/chat.html');
});

// TODO:
// create chatrooms, record in dictionary keys -- Done!
// record users that enter the chatroom in the corresponding chatroom's value -- Done!
// use the above to filter chat broadcasts to only send to those in the same chatroom -- Done!

io.on('connection', socket => {
    socket.on("join", (room) => {
        console.log(room + 'joined');
        //rooms[room]['normal'][socket] = userid;
    })
    socket.on('new_chat', (room, message) => {
        socket.to(room).emit('chat_message', message);
    });
    //socket.on('disconnect', () => {
        //delete rooms[room]['normal'][socket];
    //})
});