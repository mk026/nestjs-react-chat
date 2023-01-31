import { IUser } from "./user";

export interface IRoom {
  id: number;
  owner: IUser;
  title: string;
  description: string;
  members: IUser[];
}

export interface AddRoomDto {
  title: string;
  description: string;
}

export interface UpdateRoomDto {
  id: number;
  title?: string;
  description?: string;
}
