import { Controller, Delete, Get, Put } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('users')
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
