import { Test, TestingModule } from '@nestjs/testing';
import { UploadGambarController } from './upload-gambar.controller';

describe('UploadGambarController', () => {
  let controller: UploadGambarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadGambarController],
    }).compile();

    controller = module.get<UploadGambarController>(UploadGambarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
