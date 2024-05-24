import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClubsService {
  constructor(private prisma: PrismaService) {}
  create(createClubDto: CreateClubDto) {
    return this.prisma.club.create({ data: createClubDto });
  }

  findAll() {
    return this.prisma.club.findMany();
  }

  findOne(id: number) {
    return this.prisma.club.findUnique({
      where: { id },
      include: {
        district: true,
      },
    });
  }

  update(id: number, updateClubDto: UpdateClubDto) {
    return this.prisma.club.update({
      where: { id },
      data: updateClubDto,
    });
  }

  remove(id: number) {
    return this.prisma.club.delete({ where: { id } });
  }
}
