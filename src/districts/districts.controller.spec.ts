import { Test, TestingModule } from '@nestjs/testing';
import { DistrictsController } from './districts.controller';
import { DistrictsService } from './districts.service';
import { PrismaService } from '../prisma/prisma.service';

describe('DistrictsController', () => {
  let controller: DistrictsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistrictsController],
      providers: [DistrictsService, PrismaService],
    }).compile();

    controller = module.get<DistrictsController>(DistrictsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
