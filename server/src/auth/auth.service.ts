import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';

import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  async signup(signupCredentialsDto: SignupCredentialsDto) {
    const passwordHash = this.hashPassword(signupCredentialsDto.password);
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
    const isPasswordValid = this.verifyPassword(
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

  hashPassword(password: string) {
    return bcrypt.hashSync(password);
  }

  verifyPassword(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
  }

  generateToken(userId: number) {
    const payload: JwtPayload = { userId };
    return this.jwtService.sign(payload);
  }

  verifyToken(token: string) {
    return this.jwtService.verify<JwtPayload>(token);
  }
}
