import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UploadGambarService } from './upload-gambar.service';

@Controller('upload-gambar')
export class UploadGambarController {
  constructor(private uploadGambarService: UploadGambarService) {}
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      dest: 'public/upload',
      storage: diskStorage({
        destination: 'public/upload',
        filename(req, file, cb) {
          return cb(null, file.originalname);
        },
      }),
    }),
  )
  async upload(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return await this.uploadGambarService.upload(file.path);
  }
}
