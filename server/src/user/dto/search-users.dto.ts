import { IsNotEmpty } from 'class-validator';

import { PaginationDto } from '../../common/dto/pagination.dto';

export class SearchUsersDto extends PaginationDto {
  @IsNotEmpty()
  readonly name: string;
}
