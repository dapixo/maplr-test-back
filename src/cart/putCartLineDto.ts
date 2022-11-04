import { IsNotEmpty, IsString } from 'class-validator';

export class PutCartLineDto {
  @IsString()
  @IsNotEmpty()
  productId: string;
}
