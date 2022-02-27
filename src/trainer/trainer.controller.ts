import { Body, Controller, Post } from '@nestjs/common';
import { CreateTrainerDto } from './dto/createTrainer.dto';
import { TrainerService } from './trainer.service';

@Controller('trainers')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {
  }

  @Post()
  async trainerCreate(@Body('trainer') createTrainerDto: CreateTrainerDto): Promise<any> {

    return this.trainerService.createTrainer(createTrainerDto)
  }

}
