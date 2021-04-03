const express = require("express");
const socket = require("socket.io");

// Server setup
const PORT = process.env.PORT || 5000;
const app = express();
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`http:localhost:${PORT}`);
});

// Static files
app.use(express.static("public"));

// Socket Setup
const io = socket(server);

io.on("connection", (socket) => {
  console.log("Made socket connection");

  socket.on("message", (data) => {
    const {name, message} = data;
    io.emit("message", {name, message})
  })

});
