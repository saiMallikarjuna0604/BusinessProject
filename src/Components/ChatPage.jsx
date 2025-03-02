import React, { useState } from "react";
import {
  Container,
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import useWebSocket from "../Containers/CustomHooks/useWebSocket";
const ChatPage = () => {
  const {
    usersList,
    messages,
    sendMessage,
    selectedUser,
    setSelectedUser,
    currentUser,
  } = useWebSocket();
  const [message, setMessage] = useState("");

  if (!currentUser) return <Typography>Loading users...</Typography>;

  const handleSendMessage = () => {
    if (message.trim() && selectedUser) {
      sendMessage(selectedUser.id, message);
      setMessage("");
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Real-Time Chat 💬
      </Typography>

      <Typography variant="body2" sx={{ mb: 2, fontWeight: "bold" }}>
        You are logged in as: {currentUser.name}
      </Typography>

      {/* ✅ First Show Users, Then Open Chat */}
      {!selectedUser ? (
        <Box>
          <Typography variant="h6">Select a user to start chatting</Typography>
          <List>
            {usersList
              .filter((user) => user.id !== currentUser.id) // ✅ Exclude current user from the list
              .map((user) => (
                <ListItem
                  key={user.id}
                  button
                  onClick={() => setSelectedUser(user)}
                  sx={{
                    backgroundColor: "#E3F2FD",
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#BBDEFB" },
                    padding: "10px",
                    borderRadius: "5px",
                    marginBottom: "5px",
                  }}
                >
                  {user.name}
                </ListItem>
              ))}
          </List>
        </Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          {/* Chat Window */}
          <Box sx={{ width: "70%", padding: 2 }}>
            <Typography variant="h6">Chat with {selectedUser.name}</Typography>

            {/* Messages */}
            <Box
              sx={{
                border: "1px solid #ccc",
                height: "300px",
                overflowY: "auto",
                padding: 2,
                marginBottom: 2,
              }}
            >
              {messages
                .filter(
                  (msg) =>
                    (msg.senderId === currentUser.id &&
                      msg.receiverId === selectedUser.id) ||
                    (msg.senderId === selectedUser.id &&
                      msg.receiverId === currentUser.id)
                )
                .map((msg, index) => (
                  <Typography
                    key={index}
                    sx={{
                      textAlign:
                        msg.senderId === currentUser.id ? "right" : "left",
                      backgroundColor:
                        msg.senderId === currentUser.id ? "#E3F2FD" : "#FCE4EC",
                      padding: "8px",
                      borderRadius: "10px",
                      marginBottom: "5px",
                    }}
                  >
                    {msg.message}
                  </Typography>
                ))}
            </Box>

            <TextField
              fullWidth
              label="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default ChatPage;
