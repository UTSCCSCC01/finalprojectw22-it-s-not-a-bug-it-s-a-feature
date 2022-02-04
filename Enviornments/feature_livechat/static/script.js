const socket = io('http://localhost:8080');
const inputbox = document.getElementById('inputbox');
const userinput = document.getElementById('msg');
const chatbox = document.getElementById('chatbox');

socket.on('chat_message', message => {
    addtoChatbox(message);
})


inputbox.addEventListener('submit', event => {
    event.preventDefault();
    const msg = userinput.value;
    socket.emit('new_chat', msg);
    userinput.value = '';
})

function addtoChatbox(message){
    const para = document.createElement('p');
    para.innerText = message;
    chatbox.append(para);

}