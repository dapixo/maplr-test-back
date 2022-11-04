import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateCartLineDto {
  @IsNumber()
  @IsNotEmpty()
  newQty: number;
}
