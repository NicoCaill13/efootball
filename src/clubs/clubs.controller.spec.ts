import { Test, TestingModule } from '@nestjs/testing';
import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ClubsController', () => {
  let controller: ClubsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClubsController],
      providers: [ClubsService, PrismaService],
    }).compile();

    controller = module.get<ClubsController>(ClubsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
