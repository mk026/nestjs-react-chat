import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import typeormConfig from './config/typeorm.config';
import { validate } from './validation/env.validation';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoomModule } from './room/room.module';
import { MessageModule } from './message/message.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate }),
    TypeOrmModule.forRootAsync({ useFactory: typeormConfig }),
    AuthModule,
    UserModule,
    RoomModule,
    MessageModule,
    ChatModule,
  ],
})
export class AppModule {}
