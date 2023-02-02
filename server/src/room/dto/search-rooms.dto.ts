import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';

export class SearchRoomsDto extends PaginationDto {
  @IsOptional()
  @IsString()
  readonly title?: string;
}
