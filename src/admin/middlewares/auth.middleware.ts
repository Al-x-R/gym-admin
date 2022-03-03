import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { ExpressRequest } from '../../types/expressRequest.interface';
import { AdminService } from '../admin.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly adminService: AdminService) {
  }

  async use(req: ExpressRequest, res: Response, next: NextFunction) {

    if (!req.headers.authorization) {
      req.admin = undefined;
      next();
      return;
    }

    const token = req.headers.authorization.split(' ')[1];

    try {
      const decode = verify(token, process.env.JWT_SECRET);
      const admin = await this.adminService.findById(decode.id);
      req.admin = admin
      next();
    } catch (err) {
      req.admin = undefined;
      next();
    }
  }
}