import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { WorkoutModule } from './workout/workout.module';
import { AdminModule } from './admin/admin.module';
import { TrainerModule } from './trainer/trainer.module';
import config from './ormconfig';

@Module({
    imports: [
        TypeOrmModule.forRoot(config),
        WorkoutModule,
        AdminModule,
        TrainerModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
