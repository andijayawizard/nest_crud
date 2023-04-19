import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty()
  title: string;

  @ApiProperty({})
  description: string;

  @ApiProperty({})
  body: string;

  @ApiProperty({ default: false })
  published = false;
}
