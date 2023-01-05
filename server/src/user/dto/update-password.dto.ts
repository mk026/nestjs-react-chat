import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsNotEmpty()
  readonly oldPassword: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(100)
  readonly newPassword: string;
}
