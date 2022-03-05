import { IsNotEmpty } from 'class-validator';

export class UpdateAdminDto {
  @IsNotEmpty()
  readonly id: number;

  readonly adminName: string;

  readonly password: string;

  readonly isSuper: boolean;
}
