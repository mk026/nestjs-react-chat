import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { CreateMessageDto } from '../message/dto/create-message.dto';

@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  handleConnection(client: Socket) {
    console.log(`Client ${client.id} connected`);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, data: CreateMessageDto) {
    console.log(
      `Client ${client.id} sended message: ${data.content} to room: ${data.roomId}`,
    );
    return data;
  }

  handleDisconnect(client: Socket) {
    console.log(`Client ${client.id} disconnected`);
  }
}
