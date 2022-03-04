import { Module } from '@nestjs/common';

import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { AuthGuard } from '../admin/guards/auth.guard';
import { SuperAdminGuard } from '../admin/guards/superAdmin.guard';


@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity])],
    controllers: [AdminController],
    providers: [AdminService, AuthGuard, SuperAdminGuard],
    exports: [AdminService]
})
export class AdminModule {
}
