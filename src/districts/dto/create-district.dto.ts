// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class CreateDistrictDto {
  @ApiProperty()
  name: string;
}
