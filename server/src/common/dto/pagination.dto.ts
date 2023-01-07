import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly skip?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly take?: number;
}
