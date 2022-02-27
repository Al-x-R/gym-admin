import { Body, Controller, Post } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/createWorkout.dto';
import { WorkoutService } from './workout.service';

@Controller('workouts')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {
  }

  @Post()
  async workoutCreate(@Body('workout') createWorkoutDto: CreateWorkoutDto) {

    return this.workoutService.createWorkout(createWorkoutDto)
  }
}
