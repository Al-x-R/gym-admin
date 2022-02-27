import { Body, Controller, Post } from '@nestjs/common';
import { CreateTrainerDto } from './dto/createTrainer.dto';

@Controller('trainers')
export class TrainerController {
  constructor() {
  }

  @Post()
  async trainerCreate(@Body('trainer') createTrainerDto: CreateTrainerDto): Promise<any> {

    return createTrainerDto
  }

}
