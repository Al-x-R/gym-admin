import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/CreateWorkout.dto';
import { WorkoutResponseInterface } from './types/WorkoutResponse.interface';
import { WorkoutService } from './workout.service';

@Controller('workouts')
export class WorkoutController {
	constructor(private readonly workoutService: WorkoutService) {


	}

	@Post('create')
	async create(@Body('workout') createWorkoutDto: CreateWorkoutDto ): Promise<WorkoutResponseInterface> {
		const workout = await this.workoutService.createWorkout(createWorkoutDto)

		return this.workoutService.buildWorkoutResponse(workout)
	}

	@Get()
	async get(@Param('id') id: string) {}

	@Delete()
	async delete(@Param('id') id: string) {}

	@Patch()
	async patch(@Param('id') id:string, @Body() createWorkoutDto: CreateWorkoutDto) {}
}
