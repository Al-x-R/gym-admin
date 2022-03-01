import { IsNotEmpty } from 'class-validator';

export class AdminDto {
  @IsNotEmpty()
  readonly adminName: string;

  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  readonly isSuper: boolean;
}
