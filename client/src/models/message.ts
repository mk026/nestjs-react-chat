import { IUser } from "./user";

export interface IMessage {
  id: number;
  owner: IUser;
  roomId: number;
  content: string;
}
