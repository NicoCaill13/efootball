import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DistrictsService } from './districts.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DistrictEntity } from './entities/district.entity';

@Controller('districts')
@ApiTags('districts')
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}

  @Post()
  @ApiCreatedResponse({ type: DistrictEntity })
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtsService.create(createDistrictDto);
  }

  @Get()
  @ApiOkResponse({ type: DistrictEntity, isArray: true })
  findAll() {
    return this.districtsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: DistrictEntity })
  findOne(@Param('id') id: string) {
    return this.districtsService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({ type: DistrictEntity })
  update(
    @Param('id') id: string,
    @Body() updateDistrictDto: UpdateDistrictDto,
  ) {
    return this.districtsService.update(+id, updateDistrictDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DistrictEntity })
  remove(@Param('id') id: string) {
    return this.districtsService.remove(+id);
  }
}
