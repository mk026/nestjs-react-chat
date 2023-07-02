import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthUser } from '../common/decorators/auth-user.decorator';
import { SearchUsersDto } from './dto/search-users.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @Get('search')
  searchUsers(@Query() searchUsersDto: SearchUsersDto) {
    return this.userService.searchUsers(searchUsersDto);
  }

  @Put()
  updateUser(@AuthUser() userId: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(userId, updateUserDto);
  }

  @Put('/password')
  updatePassword(
    @AuthUser() id: number,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    return this.userService.updatePassword(id, updatePasswordDto);
  }

  @Delete()
  deleteUser(@AuthUser() userId: number) {
    return this.userService.deleteUser(userId);
  }
}
