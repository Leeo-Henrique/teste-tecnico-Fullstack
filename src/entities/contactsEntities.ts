import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Email } from "./emailsEntities";
import { Telefone } from "./telefonesEntities";
import { v4 as uuid } from "uuid";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  nome: string;

  @OneToMany(() => Telefone, (telefone) => telefone.contact, {
    eager: true,
  })
  telefones: Telefone[];

  @OneToMany(() => Email, (email) => email.contact, {
    eager: true,
  })
  emails: Email[];

  @CreateDateColumn()
  created: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
