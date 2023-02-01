import { io, Socket } from "socket.io-client";
import { config } from "../config";
import { ClientToServerEvents, ServerToClientEvents } from "../models/event";

import { AddMessageDto } from "../models/message";

class SocketService {
  private readonly socket: Socket<ServerToClientEvents, ClientToServerEvents> =
    io(config.socketUrl, {
      autoConnect: false,
    });

  connectWithAuthToken(token: string) {
    this.socket.auth = { token };
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  sendMessage(data: AddMessageDto) {
    this.socket.emit("message", data);
  }

  subscribeToMessages(messageHandler: ServerToClientEvents["message"]) {
    this.socket.on("message", messageHandler);
  }

  joinRoom(roomId: number) {
    this.socket.emit("join", roomId);
  }

  leaveRoom(roomId: number) {
    this.socket.emit("leave", roomId);
  }
}

export const socketService = new SocketService();
