import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Message } from '../message/message.entity';
import { User } from '../user/user.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Message, (message) => message.room)
  messages: Message[];

  @ManyToOne(() => User, (user) => user.rooms)
  owner: User;
}
