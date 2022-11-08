import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signup(@Body() signupCredentialsDto: SignupCredentialsDto) {
    return this.authService.signup(signupCredentialsDto);
  }

  @Post('/signin')
  signin(@Body() signinCredentialsDto: SigninCredentialsDto) {
    return this.authService.signin(signinCredentialsDto);
  }

  @Post('/check')
  check(@Body() body: { token: string }) {
    return this.authService.check(body);
  }
}
