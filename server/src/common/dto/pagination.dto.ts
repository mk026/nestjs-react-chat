import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class PaginationDto {
  @IsInt()
  @Type(() => Number)
  readonly skip: number;

  @IsInt()
  @Type(() => Number)
  readonly take: number;
}
