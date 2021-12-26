import { Injectable } from '@nestjs/common';
import {AdminModel} from "./admin.model";
import {InjectRepository} from "@nestjs/typeorm";
import {AuthCredentialsDto} from "./dto/auth.dto";
import {genSalt, genSaltSync, hashSync} from "bcryptjs";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AdminModel) private readonly adminModel: AdminModel
    ) {}

    async createAdmin(dto: AuthCredentialsDto) {

    }

    async signIn(dto: AuthCredentialsDto) {

    }
}
