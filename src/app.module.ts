import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";

import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {AppController} from './app.controller';
import {AuthController} from './auth/auth.controller';
import {WorkoutModule} from './workout/workout.module';
import {configService} from './config/config.service';

@Module({
    imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        AuthModule,
        WorkoutModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
