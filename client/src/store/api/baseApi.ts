import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { io, Socket } from "socket.io-client";

import { RootState } from "..";
import { IMessage } from "../../models/IMessage";
import { AddMessageDto } from "./messageApi";

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export const BASE_URL = "http://localhost:8080";
export const SOCKET_URL = "ws://localhost:8080";

export interface ServertoClientEvents {
  message: (data: IMessage) => void;
}

export interface ClientToServerEvents {
  message: (data: AddMessageDto) => void;
  join: (roomId: number) => void;
  leave: (roomId: number) => void;
}

export const socket: Socket<ServertoClientEvents, ClientToServerEvents> = io(
  SOCKET_URL,
  { autoConnect: false }
);

socket.on("connect", () => {
  console.log("socket connected");
});

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
