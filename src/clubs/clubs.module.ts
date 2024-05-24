import { Module } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ClubsController],
  providers: [ClubsService, PrismaService],
  imports: [PrismaModule],
})
export class ClubsModule {}
