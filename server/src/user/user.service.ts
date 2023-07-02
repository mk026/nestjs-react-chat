import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SignupCredentialsDto } from '../auth/dto/signup-credentials.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { Hash } from '../common/utils/hash.util';

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

  searchUsers() {
    return 'Search users';
  }

  getUserByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  async createUser(signupCredentialsDto: SignupCredentialsDto) {
    const foundUser = await this.getUserByEmail(signupCredentialsDto.email);
    if (foundUser) {
      throw new ConflictException('Email already in use');
    }
    const passwordHash = Hash.generateHash(signupCredentialsDto.password);
    const user = this.userRepository.create({
      name: signupCredentialsDto.name,
      bio: signupCredentialsDto.bio,
      email: signupCredentialsDto.email,
      password: passwordHash,
    });
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
    const { oldPassword, newPassword } = updatePasswordDto;
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const isPasswordValid = Hash.compare(oldPassword, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const newPasswordHash = Hash.generateHash(newPassword);
    user.password = newPasswordHash;
    await this.userRepository.save(user);
  }

  async deleteUser(id: number) {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
