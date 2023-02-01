import { AddMessageDto, IMessage } from "./message";

export interface ServerToClientEvents {
  message: (data: IMessage) => void;
  isTyping: (name: string) => void;
}

export interface ClientToServerEvents {
  message: (data: AddMessageDto) => void;
  join: (roomId: number) => void;
  leave: (roomId: number) => void;
  isTyping: (roomId: number) => void;
}
