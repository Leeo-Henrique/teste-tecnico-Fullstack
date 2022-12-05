import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from "typeorm";
import { Contact } from "./contactsEntities";
import { v4 as uuid } from "uuid";

@Entity("emails")
export class Email {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  email: string;

  @ManyToOne(() => Contact, (Contact) => Contact.emails, {
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
