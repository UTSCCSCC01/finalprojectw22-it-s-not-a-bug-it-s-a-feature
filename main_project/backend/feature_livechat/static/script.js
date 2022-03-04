const socket = io('http://localhost:8080');
const inputbox = document.getElementById('inputbox');
const userinput = document.getElementById('msg');
const chatbox = document.getElementById('chatbox');
const errorbox = document.getElementById('errortext');
const join_indicator = document.getElementById('join-indicator');


socket.on('chat_message', message => {
    addtoChatbox(message);
});

socket.emit('join', room);

inputbox.addEventListener('submit', event => {
    event.preventDefault();
    const msg = userinput.value;
    socket.emit('new_chat', room, msg);
    userinput.value = '';
    addtoChatbox(msg);
}); 

function addtoChatbox(message){
    const para = document.createElement('p');
    para.innerText = message;
    chatbox.append(para);
};




