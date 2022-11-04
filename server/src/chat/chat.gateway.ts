import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  handleConnection(client: Socket) {
    console.log(`Client ${client.id} connected`);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, data: string) {
    console.log(`Client ${client.id} sended message: ${data}`);
    return data;
  }

  handleDisconnect(client: Socket) {
    console.log(`Client ${client.id} disconnected`);
  }
}
