import { Controller, Delete, Get, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserService } from './user.service';

@Controller('users')
@UseGuards(AuthGuard())
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Put()
  updateUser() {
    return this.userService.updateUser();
  }

  @Delete()
  deleteUser() {
    return this.userService.deleteUser();
  }
}
