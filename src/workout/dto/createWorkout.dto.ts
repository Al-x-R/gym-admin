import { IsNotEmpty } from 'class-validator';

export class CreateWorkoutDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly image: string;

  @IsNotEmpty()
  readonly price: number;

  @IsNotEmpty()
  readonly trainer: string;
}