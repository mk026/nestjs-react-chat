import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';

export class SearchRoomsDto extends PaginationDto {
  @IsOptional()
  @IsString()
  readonly title?: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly ownerId?: number;
}
