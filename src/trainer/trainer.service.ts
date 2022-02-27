import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainerEntity } from './trainer.entity';
import { Repository } from 'typeorm';
import { CreateTrainerDto } from './dto/createTrainer.dto';

@Injectable()
export class TrainerService {
  constructor(
    @InjectRepository(TrainerEntity)
    private readonly trainerRepository: Repository<TrainerEntity>
  ) {
  }

  async createTrainer(createTrainerDto: CreateTrainerDto) {
    const newTrainer = new TrainerEntity()
    Object.assign(newTrainer, createTrainerDto)

    return await this.trainerRepository.save(newTrainer)
  }
}
