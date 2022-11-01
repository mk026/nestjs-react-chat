import { Controller, Get } from '@nestjs/common';

import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  getMessages() {
    return this.messageService.getMessages();
  }
}
