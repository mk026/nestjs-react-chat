import { io, Socket } from "socket.io-client";

import { IMessage } from "../models/IMessage";
import { AddMessageDto } from "../store/api/messageApi";

export const SOCKET_URL = "ws://localhost:8080";

export interface ServerToClientEvents {
  message: (data: IMessage) => void;
}

export interface ClientToServerEvents {
  message: (data: AddMessageDto) => void;
  join: (roomId: number) => void;
  leave: (roomId: number) => void;
}

class SocketService {
  private readonly socket: Socket<ServerToClientEvents, ClientToServerEvents> =
    io(SOCKET_URL, {
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
