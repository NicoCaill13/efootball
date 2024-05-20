import { District } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DistrictEntity implements District {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
