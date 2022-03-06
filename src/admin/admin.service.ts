import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { AdminDto } from './dto/admin.dto';
import { AdminEntity } from './admin.entity';
import { AdminLoginDto } from './dto/adminLogin.dto';
import { AdminLoginResponseInterface } from './types/adminLoginResponse.interface';
import { UpdateAdminDto } from '../admin/dto/updateAdmin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private readonly adminRepository: Repository<AdminEntity>
  ) {
  }

  async createAdmin(adminDto: AdminDto) {
    const adminByAdminName = await this.adminRepository.findOne({
      adminName: adminDto.adminName
    });

    if (adminByAdminName) {
      throw new HttpException('This admin name already exists', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    const newAdmin = new AdminEntity();
    Object.assign(newAdmin, adminDto);

    return this.adminRepository.save(newAdmin);
  }

  async login(adminLoginDto: AdminLoginDto) {
    const errorResponse = {
      errors: {
        'message': 'email or password is invalid',
      },
    };

    const admin = await this.adminRepository.findOne({
        adminName: adminLoginDto.adminName
      },
      {select: ['id', 'adminName', 'password', 'isSuper']},
    );

    if (!admin) {
      throw new HttpException(errorResponse, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    const isPasswordCorrect = await compare(
      adminLoginDto.password,
      admin.password,
    );

    if (!isPasswordCorrect) {
      throw new HttpException(errorResponse, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    // @ts-ignore //TODO @ts-ignore delete admin.password;
    delete admin.password;
    return admin;
  }

  async findById(id: number): Promise<AdminEntity | undefined> {
    return await this.adminRepository.findOne(id);
  }

  async allAdmins(): Promise<any> {
    return await this.adminRepository.findAndCount();
  }

  async updateAdmin(updateAdminDto: UpdateAdminDto): Promise<any> {
    return await this.adminRepository.update({
      id: updateAdminDto.id
    }, {
      adminName: updateAdminDto.adminName,
      isSuper: updateAdminDto.isSuper,
    });
  }

  generateJwt(admin: AdminEntity): string {
    return sign(
      {
        id: admin.id,
        adminName: admin.adminName,
        isSuper: admin.isSuper,
      },
      process.env.JWT_SECRET,
    );
  }

  buildAdminResponse(admin: AdminEntity): AdminLoginResponseInterface {
    return {
      admin: {
        ...admin,
        token: this.generateJwt(admin),
      },
    };
  }
}
