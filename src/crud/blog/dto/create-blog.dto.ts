import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBlogDto implements Prisma.blogCreateInput {
  @IsNumber()
  @IsNotEmpty()
  authorId: number;

  author: any;

  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  rgks: string;

  @IsString()
  @IsNotEmpty()
  ktrg: string;
}
