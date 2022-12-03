import { IUser } from "./IUser";

export interface IRoom {
  id: number;
  owner: IUser;
  title: string;
  description: string;
  members: IUser[];
}
