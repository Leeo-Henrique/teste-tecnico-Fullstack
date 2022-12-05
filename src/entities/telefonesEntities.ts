import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm";
import { Contact } from "./contactsEntities";
import { v4 as uuid } from "uuid";

@Entity("telefones")
export class Telefone {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  telefone: string;

  @ManyToOne(() => Contact, (contact) => contact.telefones, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  contact: Contact;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
