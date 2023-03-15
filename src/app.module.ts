import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BiodataModule } from './crud/biodata/biodata.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, BiodataModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
