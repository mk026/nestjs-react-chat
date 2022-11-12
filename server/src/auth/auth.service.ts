import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  signup(signupCredentialsDto: SignupCredentialsDto) {
    return `Signup for ${signupCredentialsDto.name}`;
  }

  signin(signinCredentialsDto: SigninCredentialsDto) {
    return `Signin for ${signinCredentialsDto.email}`;
  }

  check({ token }: { token: string }) {
    return token;
  }

  genetateToken(userId: number) {
    const payload: JwtPayload = { userId };
    return this.jwtService.sign(payload);
  }

  verifyToken(token: string) {
    return this.jwtService.verify<JwtPayload>(token);
  }
}
