import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SignupCredentialsDto } from '../auth/dto/signup-credentials.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getUsers() {
    return;
  }

  getUser() {
    return;
  }

  async createUser(signupCredentialsDto: SignupCredentialsDto) {
    const user = this.userRepository.create(signupCredentialsDto);
    await this.userRepository.save(user);
  }

  updateUser() {
    return;
  }

  deleteUser() {
    return;
  }
}
