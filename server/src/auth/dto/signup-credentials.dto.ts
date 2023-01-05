import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class SignupCredentialsDto {
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  readonly bio?: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
