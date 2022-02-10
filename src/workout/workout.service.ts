import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { WorkoutEntity } from './workout.entity';
import { WorkoutResponseInterface } from './types/WorkoutResponse.interface';
import { CreateWorkoutDto } from '@app/workout/dto/CreateWorkout.dto';

@Injectable()
export class WorkoutService {
    constructor(
        @InjectRepository(WorkoutEntity)
        private workoutRepository: Repository<WorkoutEntity>,
    ) {
    }

    async createWorkout(createWorkoutDto: CreateWorkoutDto): Promise<WorkoutEntity> {
        const workout = new WorkoutEntity()
        Object.assign(workout, createWorkoutDto)

        return await this.workoutRepository.save(workout)
    }

    async findAllWorkouts(): Promise<WorkoutEntity[]> {
        return await this.workoutRepository.find();
    }

    async findOneWorkout(id: string): Promise<WorkoutEntity | undefined> {
        return await this.workoutRepository.findOne(id);
    }

    async deleteWorkout(id: string): Promise<void> {
        await this.workoutRepository.delete(id);
    }

    buildWorkoutResponse(workout: WorkoutEntity): WorkoutResponseInterface {
    return { workout };
  }
}
