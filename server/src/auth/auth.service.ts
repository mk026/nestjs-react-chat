import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { UserService } from '../user/user.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Hash } from '../common/utils/hash.util';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signup(signupCredentialsDto: SignupCredentialsDto) {
    const passwordHash = Hash.generateHash(signupCredentialsDto.password);
    const user = await this.userService.createUser({
      ...signupCredentialsDto,
      password: passwordHash,
    });
    const token = this.generateToken(user.id);
    return { user, token };
  }

  async signin(signinCredentialsDto: SigninCredentialsDto) {
    const user = await this.userService.getUserByEmail(
      signinCredentialsDto.email,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const isPasswordValid = Hash.compare(
      signinCredentialsDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const token = this.generateToken(user.id);
    return { user, token };
  }

  check({ token }: { token: string }) {
    return token;
  }

  generateToken(userId: number) {
    const payload: JwtPayload = { userId };
    return this.jwtService.sign(payload);
  }

  verifyToken(token: string) {
    return this.jwtService.verify<JwtPayload>(token);
  }
}
