import { IUser } from "./user";

export interface IRoom {
  id: number;
  owner: IUser;
  title: string;
  description: string;
  members: IUser[];
}
