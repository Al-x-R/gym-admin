import {Request} from 'express'
import { AdminEntity } from '../admin/admin.entity';

export interface ExpressRequest extends Request {
  admin?: AdminEntity
}
