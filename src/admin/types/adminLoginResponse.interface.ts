import { AdminType } from './admin.types';

export interface AdminLoginResponseInterface {
  admin: AdminType & { token: string };
}
