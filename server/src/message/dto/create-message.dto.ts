import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsInt()
  readonly roomId: number;

  @IsNotEmpty()
  readonly content: string;
}
