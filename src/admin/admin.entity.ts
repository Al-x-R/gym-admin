import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcryptjs';

@Entity({name: 'admins'})
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  adminName: string;

  @Column({select: false})
  password: string;

  @Column()
  isSuper: boolean;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}