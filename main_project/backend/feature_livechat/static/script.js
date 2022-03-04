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
    if (msg.length != 0) {
        socket.emit('new_chat', room, msg);
    userinput.value = '';
    addtoChatbox(msg);
    }
}); 

function addtoChatbox(message){
    const container = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('div')
    const para = document.createElement('p');
    // test purpose
    img.src = "https://img.rankedboost.com/wp-content/uploads/2019/05/WoW-Classic-Warrior-Guide.png"
    name.innerHTML = "user"
    //
    para.innerText = message;
    container.appendChild(img);
    container.appendChild(name);
    container.appendChild(para);
    chatbox.append(container);
};




