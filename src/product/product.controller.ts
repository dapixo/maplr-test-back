import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import {
  CatalogueItemEntity,
  SyrupType,
} from '../entities/catalogueItem.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  find(@Query() query: { type: SyrupType }): Promise<CatalogueItemEntity[]> {
    return this.productService.find(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CatalogueItemEntity> {
    return this.productService.findOne(id);
  }
}
