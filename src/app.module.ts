import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DistrictsModule } from './districts/districts.module';
import { ClubsModule } from './clubs/clubs.module';

@Module({
  imports: [PrismaModule, DistrictsModule, ClubsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
