import { Injectable } from '@nestjs/common';

import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';

@Injectable()
export class AuthService {
  signup(signupCredentialsDto: SignupCredentialsDto) {
    return `Signup for ${signupCredentialsDto.name}`;
  }

  signin(signinCredentialsDto: SigninCredentialsDto) {
    return `Signin for ${signinCredentialsDto.email}`;
  }
}
