import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Put,
} from '@nestjs/common';
import { CartLineEntity } from 'src/entities/cartLine.entity';
import { CartService } from './cart.service';
import { PutCartLineDto } from './putCartLineDto';
import { UpdateCartLineDto } from './updateCartlineDto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  findAll(): Promise<CartLineEntity[]> {
    return this.cartService.findAll();
  }

  @Put()
  async createOrupdate(
    @Body() putCartLineDto: PutCartLineDto,
  ): Promise<CartLineEntity> {
    try {
      return await this.cartService.createorUpdate(putCartLineDto);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.cartService.delete(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCartLineDto: UpdateCartLineDto,
  ): Promise<CartLineEntity> {
    return this.cartService.update(id, updateCartLineDto);
  }
}
