import { Test, TestingModule } from '@nestjs/testing';
import { ClubsService } from './clubs.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ClubsService', () => {
  let service: ClubsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClubsService, PrismaService],
    }).compile();

    service = module.get<ClubsService>(ClubsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
