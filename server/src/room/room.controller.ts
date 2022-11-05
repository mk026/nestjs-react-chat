import { Controller, Delete, Get, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { RoomService } from './room.service';

@Controller('rooms')
@UseGuards(AuthGuard())
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  getRooms() {
    return this.roomService.getRooms();
  }

  @Get()
  getRoom() {
    return this.roomService.getRoom();
  }

  @Put()
  updateRoom() {
    return this.roomService.updateRoom();
  }

  @Delete()
  deleteRoom() {
    return this.roomService.deleteRoom();
  }
}
