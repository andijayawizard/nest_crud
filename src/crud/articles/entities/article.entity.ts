import { ApiProperty } from '@nestjs/swagger';
import { article } from '@prisma/client';

export class Article implements article {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ nullable: true })
  description: string | null;

  @ApiProperty()
  body: string;

  @ApiProperty()
  published = false;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
