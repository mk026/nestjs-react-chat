import { IsNotEmpty } from 'class-validator';

export class UpdatePasswordDto {
  @IsNotEmpty()
  readonly oldPassword: string;

  @IsNotEmpty()
  readonly newPassword: string;
}
