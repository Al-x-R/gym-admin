import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AuthController } from './auth/auth.controller';
import { ProductModule } from './product/product.module';
import { configService } from './config/config.service';

@Module({
  imports: [
      TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
      AuthModule,
    ProductModule
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
