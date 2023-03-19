import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto implements Prisma.movieCreateInput {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;
}
