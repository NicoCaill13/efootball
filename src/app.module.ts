import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DistrictsModule } from './districts/districts.module';

@Module({
  imports: [PrismaModule, DistrictsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}