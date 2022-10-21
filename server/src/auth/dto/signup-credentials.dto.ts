import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignupCredentialsDto {
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
