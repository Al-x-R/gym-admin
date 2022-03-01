import { Body, Controller, Post } from '@nestjs/common';

import { AdminDto } from './dto/admin.dto';
import { AdminEntity } from './admin.entity';
import { AdminService } from './admin.service';
import { AdminLoginDto } from './dto/adminLogin.dto';
import { AdminLoginResponseInterface } from './types/adminLoginResponse.interface';

@Controller()
export class AdminController {
    constructor(private readonly adminService: AdminService) {
    }

    @Post('admin')
    async createAdmin(@Body('admin') adminDto: AdminDto): Promise<AdminEntity> {
        return await this.adminService.createAdmin(adminDto);
    }

    @Post('login')
    async adminLogin(@Body('admin') adminLoginDto: AdminLoginDto): Promise<AdminLoginResponseInterface> {
        const admin = await this.adminService.login(adminLoginDto)

        return this.adminService.buildAdminResponse(admin)
    }
}
