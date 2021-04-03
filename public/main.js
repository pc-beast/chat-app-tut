const socket = io();

const name = document.getElementById("name");
const message = document.getElementById("message");
const messages = document.getElementById("messages");
const send = document.getElementById("send");

const acknowledgement = (ack) => {
  if (ack) {
    alert(ack);
  }
};

// if message is emitted by server
socket.on("message", (data) => {
  const mtag = document.createElement("p");
  const msg = document.createTextNode(`${data.name}: ${data.message}`);
  mtag.appendChild(msg);
  messages.appendChild(mtag);
});

// emit message to server
send.addEventListener("click", (e) => {
  e.preventDefault();
  socket.emit("message", {name: name.value, message: message.value}, acknowledgement)
  message.value = "";
})
