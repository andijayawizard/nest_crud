import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBlogDto {
  @IsNumber()
  @IsNotEmpty()
  authorId: number;

  // author: any;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  rgks: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  ktrg: string;
}
