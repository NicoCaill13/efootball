import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateClubDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty()
  address: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty()
  city: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty()
  zipCode: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty()
  phone: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  districtId: number;
}
