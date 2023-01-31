import { IUser } from "./user";

export interface IMessage {
  id: number;
  owner: IUser;
  roomId: number;
  content: string;
}

export interface AddMessageDto {
  content: string;
  roomId: number;
}
