import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TrainerController } from './trainer.controller';
import { TrainerService } from './trainer.service';
import { TrainerEntity } from './trainer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrainerEntity])],
  controllers: [TrainerController],
  providers: [TrainerService]
})
export class TrainerModule {}
