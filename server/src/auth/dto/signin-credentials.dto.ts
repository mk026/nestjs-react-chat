import { IsEmail, IsNotEmpty } from 'class-validator';

export class SigninCredentialsDto {
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
