import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import {
  CatalogueItemEntity,
  SyrupType,
} from '../entities/catalogueItem.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(CatalogueItemEntity)
    private catalogueItemsRepository: Repository<CatalogueItemEntity>,
    @InjectDataSource() private dataSource: DataSource,
  ) {}

  async find(query: { type: SyrupType }): Promise<CatalogueItemEntity[]> {
    try {
      return await this.catalogueItemsRepository.findBy({ type: query.type });
    } catch (err) {
      throw new NotFoundException();
    }
  }

  async findOne(id: string): Promise<CatalogueItemEntity> {
    try {
      return await this.catalogueItemsRepository.findOneByOrFail({ id });
    } catch (err) {
      throw new NotFoundException();
    }
  }

  async updateStock(
    id: string,
    newStock: number,
  ): Promise<CatalogueItemEntity> {
    const catalogueItemToUpdate: CatalogueItemEntity =
      await this.catalogueItemsRepository.findOneBy({ id });
    catalogueItemToUpdate.stock = newStock;
    return await this.catalogueItemsRepository.save(catalogueItemToUpdate);
  }
}
