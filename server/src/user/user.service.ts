import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SignupCredentialsDto } from '../auth/dto/signup-credentials.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  getUser(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  getUserByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  async createUser(signupCredentialsDto: SignupCredentialsDto) {
    const user = this.userRepository.create(signupCredentialsDto);
    await this.userRepository.save(user);
    return user;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const result = await this.userRepository.update(id, updateUserDto);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  async updatePassword(id: number, updatePasswordDto: UpdatePasswordDto) {
    return `Updating password for user with id ${id}`;
  }

  async deleteUser(id: number) {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
