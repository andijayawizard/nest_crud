import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BiodataModule } from './crud/biodata/biodata.module';
import { AuthModule } from './auth/auth.module';
import { UploadGambarModule } from './upload-gambar/upload-gambar.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TodoModule } from './crud/todo/todo.module';
import { MovieModule } from './crud/movie/movie.module';
import { BlogModule } from './crud/blog/blog.module';
import { UsersModule } from './crud/users/users.module';

@Module({
  imports: [
    PrismaModule,
    BiodataModule,
    AuthModule,
    UploadGambarModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
    TodoModule,
    MovieModule,
    BlogModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
