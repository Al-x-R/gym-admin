import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { AdminEntity } from './admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private readonly adminRepository: Repository<AdminEntity>
    ) {
    }

    async createAdmin(createAdminDto: CreateAdminDto) {
        const newAdmin = new AdminEntity();
        Object.assign(newAdmin, createAdminDto);

        return this.adminRepository.save(newAdmin);
    }
}
