import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class orderLineDto {
  @IsString()
  productId: string;

  @IsNumber()
  @IsNotEmpty()
  qty: number;
}
