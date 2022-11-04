import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartLineEntity } from '../entities/cartLine.entity';
import { ProductModule } from '../product/product.module';

@Module({
  exports: [CartService],
  imports: [TypeOrmModule.forFeature([CartLineEntity]), ProductModule],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
