import { IUser } from "./user";

export interface AuthResponse {
  user: IUser;
  token: string;
}
