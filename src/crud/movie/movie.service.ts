import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  constructor(private prismaService: PrismaService) {}
  async create(createMovieDto: CreateMovieDto) {
    const create = await this.prismaService.movie.create({
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
    const movie = await this.prismaService.movie.findMany();
    return {
      statusCode: 200,
      message: 'success',
      data: movie ?? [],
    };
  }

  async findOne(id: number) {
    const movie = await this.prismaService.movie.findFirst({ where: { id } });
    return {
      statusCode: 200,
      message: 'success',
      data: movie ?? {},
    };
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = await this.prismaService.movie.update({
      where: { id },
      data: updateMovieDto,
    });
    if (movie) {
      return {
        statusCode: 200,
        message: 'success',
        data: movie ?? {},
      };
    }
    throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
  }

  async remove(id: number) {
    const movie = await this.prismaService.movie.delete({ where: { id } });
    if (movie) {
      return {
        statusCode: 200,
        message: 'success',
      };
    }
  }
}
