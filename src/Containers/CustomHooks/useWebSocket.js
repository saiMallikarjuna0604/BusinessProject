import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:5000";

const usersList = [
  { id: 1, name: "Sai" },
  { id: 2, name: "Ramesh" },
  { id: 3, name: "Ankit" },
  { id: 4, name: "Priya" },
];

const useWebSocket = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);

    const randomUser = usersList[Math.floor(Math.random() * usersList.length)];
    setCurrentUser(randomUser);
    newSocket.emit("joinChat", randomUser.id);

    newSocket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => newSocket.disconnect();
  }, []);

  const sendMessage = (receiverId, message) => {
    if (!currentUser) return;
    if (socket) {
      socket.emit("sendMessage", {
        senderId: currentUser.id,
        receiverId,
        message,
      });
      setMessages((prev) => [...prev, { senderId: currentUser.id, message }]);
    }
  };

  return {
    usersList,
    messages,
    sendMessage,
    selectedUser,
    setSelectedUser,
    currentUser,
  };
};

export default useWebSocket;
