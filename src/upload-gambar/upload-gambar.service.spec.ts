import { Test, TestingModule } from '@nestjs/testing';
import { UploadGambarService } from './upload-gambar.service';

describe('UploadGambarService', () => {
  let service: UploadGambarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadGambarService],
    }).compile();

    service = module.get<UploadGambarService>(UploadGambarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
