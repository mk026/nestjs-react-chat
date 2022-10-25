import { ComponentType } from "react";

import ProfilePage from "../pages/profile-page/ProfilePage";
import RoomPage from "../pages/room-page/RoomPage";
import RoomsPage from "../pages/rooms-page/RoomsPage";
import SigninPage from "../pages/signin-page/SigninPage";
import SignupPage from "../pages/signup-page/SignupPage";

export enum Paths {
  SIGNUP = "/signup",
  SIGNIN = "/signin",
  PROFILE = "/profile",
  ROOMS = "/rooms",
  ROOM = "/rooms/:id",
}

export interface IRoute {
  path: Paths;
  Component: ComponentType;
}

export const publicPaths: IRoute[] = [
  { path: Paths.SIGNUP, Component: SignupPage },
  { path: Paths.SIGNIN, Component: SigninPage },
];

export const authPaths: IRoute[] = [
  { path: Paths.PROFILE, Component: ProfilePage },
  { path: Paths.ROOMS, Component: RoomsPage },
  { path: Paths.ROOM, Component: RoomPage },
];
