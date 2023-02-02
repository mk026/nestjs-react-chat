import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { AuthUser } from '../common/decorators/auth-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomService } from './room.service';
import { GetRoomsDto } from './dto/get-rooms.dto';

@Controller('rooms')
@UseGuards(JwtAuthGuard)
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  getRooms(getRoomsDto: GetRoomsDto) {
    return this.roomService.getRooms(getRoomsDto);
  }

  @Get(':id')
  getRoom(@Param('id', ParseIntPipe) id: number) {
    return this.roomService.getRoom(id);
  }

  @Post()
  createRoom(@AuthUser() userId: number, @Body() createRoomDto: CreateRoomDto) {
    return this.roomService.createRoom(createRoomDto, userId);
  }

  @Put(':id')
  updateRoom(
    @AuthUser() userId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRoomDto: UpdateRoomDto,
  ) {
    return this.roomService.updateRoom(id, updateRoomDto, userId);
  }

  @Delete(':id')
  deleteRoom(
    @AuthUser() userId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.roomService.deleteRoom(id, userId);
  }
}
