import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Message } from '../message/message.entity';
import { Room } from '../room/room.entity';

@Entity()
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
}
