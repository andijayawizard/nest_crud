import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma:PrismaService){}
    async  create(createArticleDto: CreateArticleDto) {
    // const createArticle=await this.prisma.article.create({data:createArticleDto})
    // if(createArticle){
    //   return {message:'success'}
    // }
    return await this.prisma.article.create({data:createArticleDto})
  }

async  findAll() {
    // const articles=await this.prisma.article.findMany()
    // return {
    //   statusCode: 200,
    //   message: 'success',
    //   data: articles ?? {},
    // }
    return await this.prisma.article.findMany({where:{published:true}})
  }

  findOne(id: number) {
    return this.prisma.article.findFirst({where:{id}})
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where:{id},
      data:updateArticleDto
    })
  }

  remove(id: number) {
    return this.prisma.article.delete({where:{id}})
  }

async  findDrafts(){
    return await this.prisma.article.findMany({where:{published:false}})
  }
}
