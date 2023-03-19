import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
  constructor(private prismaService: PrismaService) {}
  async create(createBlogDto: CreateBlogDto) {
    const blog = await this.prismaService.blog.create({
      data: createBlogDto,
    });
    if (blog) {
      return {
        statusCode: 200,
        message: 'success',
      };
    }
    throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
  }

  async findAll() {
    const blog = await this.prismaService.blog.findMany();
    if (blog) {
      return {
        statusCode: 200,
        message: 'success',
        data: blog ?? [],
      };
    }
  }

  async findOne(id: number) {
    const blog = await this.prismaService.blog.findFirst({ where: { id } });
    if (blog) {
      return {
        statusCode: 200,
        message: 'success',
        data: blog ?? {},
      };
    }
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    const blog = await this.prismaService.blog.update({
      where: { id },
      data: updateBlogDto,
    });
    if (blog) {
      return {
        statusCode: 200,
        message: 'success',
        data: blog ?? {},
      };
    }
  }

  async remove(id: number) {
    const blog = await this.prismaService.blog.delete({ where: { id } });
    if (blog) {
      return {
        statusCode: 200,
        message: 'success',
      };
    }
  }
}
