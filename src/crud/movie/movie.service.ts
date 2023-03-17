import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  constructor(private prismaService: PrismaService) {}
  async create(createMovieDto: CreateMovieDto) {
    const create = await this.prismaService.biodata.create({
      data: createMovieDto,
    });
    if (create) {
      return {
        statusCode: 200,
        message: 'success',
      };
    }
    throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
  }

  async findAll() {
    return `This action returns all movie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
