import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

import { Message } from '../message/message.entity';
import { Room } from '../room/room.entity';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Message, (message) => message.owner)
  messages: Message[];

  @OneToMany(() => Room, (room) => room.owner)
  rooms: Room[];

  @ManyToMany(() => Room, (room) => room.members)
  joinedRooms: Room[];
}
