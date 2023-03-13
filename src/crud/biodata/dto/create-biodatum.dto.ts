import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBiodatumDto implements Prisma.biodataCreateInput {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsNumber()
  @IsNotEmpty()
  nik: number;

  @IsString()
  @IsNotEmpty()
  address?: string;
}
