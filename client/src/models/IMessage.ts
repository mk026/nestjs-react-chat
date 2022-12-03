import { IUser } from "./IUser";

export interface IMessage {
  id: number;
  owner: IUser;
  roomId: number;
  content: string;
}
