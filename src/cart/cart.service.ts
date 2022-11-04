import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartLineEntity } from '../entities/cartLine.entity';
import { ProductService } from '../product/product.service';
import { UpdateCartLineDto } from './updateCartlineDto';
import { PutCartLineDto } from './putCartLineDto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartLineEntity)
    private cartLineRepository: Repository<CartLineEntity>,
    private readonly productService: ProductService,
  ) {}

  findAll(): Promise<CartLineEntity[]> {
    return this.cartLineRepository.find({ relations: ['product'] });
  }

  async createorUpdate(
    putCartLineDto: PutCartLineDto,
  ): Promise<CartLineEntity> {
    const productId = putCartLineDto.productId;
    const cartLine: CartLineEntity = await this.cartLineRepository.findOne({
      where: { productId },
      relations: ['product'],
    });

    if (cartLine) {
      cartLine.qty === cartLine.product.stock
        ? (cartLine.qty = cartLine.product.stock)
        : cartLine.qty++;

      return await this.cartLineRepository.save(cartLine);
    } else {
      const newCartLine = {
        productId,
        qty: 1,
      };
      return await this.cartLineRepository.save(newCartLine);
    }
  }

  delete(id: string): void {
    this.cartLineRepository.delete({ id });
  }

  deleteByProductId(productId: string): void {
    this.cartLineRepository.delete({ productId });
  }

  async update(
    id: string,
    updateCartLineDto: UpdateCartLineDto,
  ): Promise<CartLineEntity> {
    const cartLineToUpdate = await this.cartLineRepository.findOneBy({ id });
    cartLineToUpdate.qty = updateCartLineDto.newQty;
    return await this.cartLineRepository.save(cartLineToUpdate);
  }
}
