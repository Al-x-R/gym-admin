import { IsNotEmpty } from 'class-validator';

export class CreateTrainerDto {
  @IsNotEmpty()
  readonly fullName: string;

  readonly mobile: string;

  @IsNotEmpty()
  readonly description: string;

  readonly birthDate: Date;

  readonly image: string;
}
