import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from 'src/user/user.service';

import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signup(signupCredentialsDto: SignupCredentialsDto) {
    const passwordHash = this.hashPassword(signupCredentialsDto.password);
    const user = await this.userService.createUser({
      ...signupCredentialsDto,
      password: passwordHash,
    });
    const token = this.genetateToken(user.id);
    return { user, token };
  }

  signin(signinCredentialsDto: SigninCredentialsDto) {
    return `Signin for ${signinCredentialsDto.email}`;
  }

  check({ token }: { token: string }) {
    return token;
  }

  hashPassword(password: string) {
    return bcrypt.hashSync(password);
  }

  genetateToken(userId: number) {
    const payload: JwtPayload = { userId };
    return this.jwtService.sign(payload);
  }

  verifyToken(token: string) {
    return this.jwtService.verify<JwtPayload>(token);
  }
}
