import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { io, Socket } from "socket.io-client";
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
  }),
  endpoints: () => ({}),
});
