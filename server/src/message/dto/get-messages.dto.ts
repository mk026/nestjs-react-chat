import { PickType } from '@nestjs/mapped-types';

import { CreateMessageDto } from './create-message.dto';

export class GetMessagesDto extends PickType(CreateMessageDto, [
  'roomId',
] as const) {}
