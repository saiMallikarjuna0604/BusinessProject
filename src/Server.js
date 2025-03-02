const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173/",
    methods: ["GET", "POST"],
  },
});

let activeUsers = {}; // Track online users
let messages = {}; // Store messages per user pair

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("joinChat", (userId) => {
    activeUsers[userId] = socket.id;
  });

  socket.on("sendMessage", ({ senderId, receiverId, message }) => {
    const chatKey = `${senderId}_${receiverId}`;
    if (!messages[chatKey]) messages[chatKey] = [];
    messages[chatKey].push({ senderId, message });

    const receiverSocketId = activeUsers[receiverId];
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("receiveMessage", { senderId, message });
    }
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
    Object.keys(activeUsers).forEach((userId) => {
      if (activeUsers[userId] === socket.id) delete activeUsers[userId];
    });
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));
