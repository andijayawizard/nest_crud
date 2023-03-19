import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBlogDto {
  @IsNumber()
  @IsNotEmpty()
  authorId: number;

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
