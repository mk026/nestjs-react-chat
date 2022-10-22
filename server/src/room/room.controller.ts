import { Controller, Delete, Get, Put } from '@nestjs/common';

import { RoomService } from './room.service';

@Controller('rooms')
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
