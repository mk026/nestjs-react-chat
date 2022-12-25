import { IsNotEmpty } from 'class-validator';

export class PaginationDto {
  @IsNotEmpty()
  readonly skip: number;

  @IsNotEmpty()
  readonly take: number;
}
