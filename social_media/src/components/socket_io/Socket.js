// socket.js
import { io } from "socket.io-client";

let socket;

try {
  socket = io("http://localhost:5000", {
    withCredentials: true,
  });
} catch (error) {
  console.error("Error connecting to socket server:", error);
  // Provide a fallback socket-like object to prevent app crashes
  socket = {
    on: () => {},
    off: () => {},
    emit: () => {},
    connect: () => {},
    disconnect: () => {}
  };
}

export default socket;
