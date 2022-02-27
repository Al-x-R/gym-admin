import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'trainers'})
export class TrainerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  mobile: string;

  @Column()
  description: string;

  @Column()
  birthDate: Date;

  @Column()
  image: string;
}