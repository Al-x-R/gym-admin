import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { AdminDto } from './dto/admin.dto';
import { AdminEntity } from './admin.entity';
import { AdminService } from './admin.service';
import { AdminLoginDto } from './dto/adminLogin.dto';
import { AdminLoginResponseInterface } from './types/adminLoginResponse.interface';
import { Admin } from '../admin/decorators/admin.decorator';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {
  }

  @Post('admin')
  @UsePipes(new ValidationPipe())
  async createAdmin(@Body('admin') adminDto: AdminDto): Promise<AdminEntity> {
    return await this.adminService.createAdmin(adminDto);
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  async adminLogin(@Body('admin') adminLoginDto: AdminLoginDto): Promise<AdminLoginResponseInterface> {
    const admin = await this.adminService.login(adminLoginDto);

    return this.adminService.buildAdminResponse(admin);
  }

  @Get('admin')
  async getCurrentAdmin(@Admin() admin: AdminEntity): Promise<AdminLoginResponseInterface | undefined> {
    return this.adminService.buildAdminResponse(admin);
  }
}
