import { Module } from '@nestjs/common';
import { MessageModule } from 'src/message/message.module';
import { AuthModule } from '../auth/auth.module';

import { ChatGateway } from './chat.gateway';

@Module({
  imports: [AuthModule, MessageModule],
  providers: [ChatGateway],
})
export class ChatModule {}
