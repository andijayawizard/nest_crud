import { ApiProperty } from '@nestjs/swagger';

export class Biodatum {
  @ApiProperty()
  nama: string;

  @ApiProperty()
  nik: number;

  @ApiProperty()
  address: string;
}
