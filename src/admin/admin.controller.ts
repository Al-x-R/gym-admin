import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/createAdmin.dto';

@Controller()
export class AdminController {
    constructor(private readonly adminService: AdminService) {
    }

    @Post('admin')
    async createAdmin(@Body('admin') createAdminDto: CreateAdminDto): Promise<any> {

        return await this.adminService.createAdmin(createAdminDto);
    }
}
