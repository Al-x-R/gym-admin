import { Body, Controller, Get, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';

import { AdminDto } from './dto/admin.dto';
import { AdminEntity } from './admin.entity';
import { AdminService } from './admin.service';
import { AdminLoginDto } from './dto/adminLogin.dto';
import { AdminLoginResponseInterface } from './types/adminLoginResponse.interface';
import { Admin } from '../admin/decorators/admin.decorator';
import { AuthGuard } from '../admin/guards/auth.guard';
import { SuperAdminGuard } from '../admin/guards/superAdmin.guard';
import { UpdateAdminDto } from '../admin/dto/updateAdmin.dto';

@Controller('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {
  }

  @Post()
  @UseGuards(SuperAdminGuard)
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

  @Get('current')
  @UseGuards(AuthGuard)
  async getCurrentAdmin(@Admin() admin: AdminEntity): Promise<AdminLoginResponseInterface | undefined> {
    return this.adminService.buildAdminResponse(admin);
  }

  @Patch()
  @UseGuards(SuperAdminGuard)
  async updateAdmin(@Body('admin') updateAdminDto: UpdateAdminDto) {
    return this.adminService.updateAdmin(updateAdminDto)
  }

  @Get()
  async allAdmins() {
    return this.adminService.allAdmins()
  }
}
