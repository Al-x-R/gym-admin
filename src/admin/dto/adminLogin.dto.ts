import { IsNotEmpty } from 'class-validator';

export class AdminLoginDto {
  @IsNotEmpty()
  readonly adminName: string;

  @IsNotEmpty()
  readonly password: string;
}