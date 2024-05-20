import { District } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DistrictEntity implements District {
  constructor(partial: Partial<DistrictEntity>) {
    Object.assign(this, partial);
  }
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
