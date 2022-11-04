import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderLineEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  productId: string;

  @Column()
  qty: number;
}
