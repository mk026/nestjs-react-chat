import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateRoomDto } from './dto/create-room.dto';
import { GetRoomsDto } from './dto/get-rooms.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './room.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  getRooms(getRoomsDto: GetRoomsDto) {
    return this.roomRepository.find({
      skip: getRoomsDto.skip,
      take: getRoomsDto.take,
      order: { createdAt: 'DESC' },
    });
  }

  getRoom(id: number) {
    return this.roomRepository.findOneBy({ id });
  }

  async createRoom(createRoomDto: CreateRoomDto, userId: number) {
    const room = this.roomRepository.create({
      title: createRoomDto.title,
      description: createRoomDto.description,
      owner: { id: userId },
    });
    await this.roomRepository.save(room);
  }

  async updateRoom(id: number, updateRoomDto: UpdateRoomDto, userId: number) {
    const result = await this.roomRepository.update(
      { id, owner: { id: userId } },
      updateRoomDto,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }
  }

  async deleteRoom(id: number, userId: number) {
    const result = await this.roomRepository.delete({
      id,
      owner: { id: userId },
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }
  }
}
