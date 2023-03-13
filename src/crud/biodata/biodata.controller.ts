import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BiodataService } from './biodata.service';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';

@Controller('biodata')
export class BiodataController {
  constructor(private readonly biodataService: BiodataService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createBiodatumDto: CreateBiodatumDto) {
    return await this.biodataService.create(createBiodatumDto);
  }

  @Get()
  async findAll() {
    return await this.biodataService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.biodataService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBiodatumDto: UpdateBiodatumDto,
  ) {
    return await this.biodataService.update(+id, updateBiodatumDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.biodataService.remove(+id);
  }
}
