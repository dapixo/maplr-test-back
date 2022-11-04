import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { CatalogueItemEntity } from '../entities/catalogueItem.entity';

@Module({
  exports: [ProductService],
  imports: [TypeOrmModule.forFeature([CatalogueItemEntity])],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
