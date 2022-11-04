import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { CatalogueItemEntity } from './catalogueItem.entity';

@Entity()
export class CartLineEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  productId: string;

  @Column()
  qty: number;

  @OneToOne(() => CatalogueItemEntity)
  @JoinColumn()
  product: CatalogueItemEntity;
}
