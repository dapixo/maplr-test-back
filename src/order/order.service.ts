import { Injectable } from '@nestjs/common';
import { orderLineDto } from './orderLineDto';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../product/product.service';
import { CatalogueItemEntity } from '../entities/catalogueItem.entity';

@Injectable()
export class OrderService {
  constructor(
    private cartService: CartService,
    private productService: ProductService,
  ) {}

  async validate(orderlineDtoArray: orderLineDto[]) {
    for (const orderLineDto of orderlineDtoArray) {
      const product: CatalogueItemEntity = await this.productService.findOne(
        orderLineDto.productId,
      );
      this.productService.updateStock(
        orderLineDto.productId,
        product.stock - orderLineDto.qty,
      );
      this.cartService.deleteByProductId(orderLineDto.productId);
    }
  }
}
