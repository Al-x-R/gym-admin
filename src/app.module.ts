import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { WorkoutModule } from './workout/workout.module';
import { AdminModule } from './admin/admin.module';
import { TrainerModule } from './trainer/trainer.module';
import config from './ormconfig';
import { AuthMiddleware } from './admin/middlewares/auth.middleware';

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
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes({
            path: '*',
            method: RequestMethod.ALL,
        });
    }
}
