import { IsInt, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateMessageDto {
  @IsInt()
  readonly roomId: number;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(500)
  readonly content: string;
}
