import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { MessageService } from './message.service';

@Controller('messages')
@UseGuards(AuthGuard())
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  getMessages() {
    return this.messageService.getMessages();
  }
}
