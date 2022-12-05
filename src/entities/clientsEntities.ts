import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created: Date;
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
