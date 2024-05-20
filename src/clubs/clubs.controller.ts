import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ClubEntity } from './entities/club.entity';

@Controller('clubs')
@ApiTags('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @Post()
  @ApiCreatedResponse({ type: ClubEntity })
  async create(@Body() createClubDto: CreateClubDto) {
    return new ClubEntity(await this.clubsService.create(createClubDto));
  }

  @Get()
  @ApiOkResponse({ type: ClubEntity, isArray: true })
  async findAll(): Promise<ClubEntity[]> {
    const clubs = await this.clubsService.findAll();
    return clubs.map((club) => new ClubEntity(club));
  }

  @Get(':id')
  @ApiOkResponse({ type: ClubEntity })
  async findOne(@Param('id') id: string) {
    const club = await this.clubsService.findOne(+id);
    if (!club) {
      throw new NotFoundException(`Club with id ${id} does not exist.`);
    }
    return new ClubEntity(club);
  }

  @Put(':id')
  @ApiOkResponse({ type: ClubEntity })
  async update(@Param('id') id: string, @Body() updateClubDto: UpdateClubDto) {
    return new ClubEntity(await this.clubsService.update(+id, updateClubDto));
  }

  @Delete(':id')
  @ApiOkResponse({ type: ClubEntity })
  async remove(@Param('id') id: string) {
    new ClubEntity(await this.clubsService.remove(+id));
  }
}
