import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMessageDto {
  @IsNumber()
  @IsNotEmpty()
  readonly roomId: number;

  @IsNotEmpty()
  readonly content: string;
}
