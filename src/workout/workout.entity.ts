import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'workouts'})
export class WorkoutEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    price: number;

    @Column()
    trainer: string;

    // @OneToMany(type => Photo, photo => photo.user)
    // photos: Photo[];
}