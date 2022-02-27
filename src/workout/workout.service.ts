import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkoutEntity } from './workout.entity';
import { Repository } from 'typeorm';
import { CreateWorkoutDto } from './dto/createWorkout.dto';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(WorkoutEntity)
    private readonly workoutRepository: Repository<WorkoutEntity>
  ) {
  }

  async createWorkout(createWorkoutDto: CreateWorkoutDto): Promise<any> {
    const newWorkout = new WorkoutEntity()
    Object.assign(newWorkout, createWorkoutDto)

    return this.workoutRepository.save(newWorkout)
  }
}
