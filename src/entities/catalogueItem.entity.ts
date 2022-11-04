import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export type SyrupType = 'Amber' | 'Dark' | 'Clear';

@Entity()
export class CatalogueItemEntity {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  name: string;

  @Column({ length: 500 })
  description: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column({
    type: 'enum',
    enum: ['Amber', 'Dark', 'Clear'],
  })
  type: SyrupType[];
}
