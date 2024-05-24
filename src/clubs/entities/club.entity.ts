import { Club } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { DistrictEntity } from '../../districts/entities/district.entity';

export class ClubEntity implements Club {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  zipCode: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  districtId: number;

  @ApiProperty({ required: false, type: DistrictEntity })
  district?: DistrictEntity;
  constructor({ district, ...data }: Partial<ClubEntity>) {
    Object.assign(this, data);
    if (district) {
      this.district = new DistrictEntity(district);
    }
  }
}
