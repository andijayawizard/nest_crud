import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';

@Injectable()
export class BiodataService {
  constructor(private dbService: PrismaService) {}
  async create(createBiodatumDto: CreateBiodatumDto) {
    const createBiodata = await this.dbService.biodata.create({
      data: createBiodatumDto,
    });
    if (createBiodata) {
      return {
        statusCode: 200,
        message: 'success',
      };
    }
    throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
  }

  async findAll() {
    const biodataAll = await this.dbService.biodata.findMany();
    return {
      statusCode: 200,
      message: 'success',
      data: biodataAll ?? [],
    };
  }

  async findOne(id: number) {
    const biodata = await this.dbService.biodata.findFirst({ where: { id } });
    return {
      statusCode: 200,
      message: 'success',
      data: biodata ?? {},
    };
  }

  async update(id: number, updateBiodatumDto: UpdateBiodatumDto) {
    const biodata = await this.dbService.biodata.update({
      where: { id },
      data: updateBiodatumDto,
    });
    if (biodata) {
      return {
        statusCode: 200,
        message: 'success',
        data: biodata ?? {},
      };
    }
    throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
  }

  async remove(id: number) {
    const biodata = await this.dbService.biodata.delete({ where: { id } });
    if (biodata) {
      return {
        statusCode: 200,
        message: 'success',
      };
    }
  }
}
