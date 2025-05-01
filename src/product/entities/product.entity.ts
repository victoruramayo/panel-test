// src/products/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ProductCategory } from './category.enum';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  stock: number;

  @Column({
    type: 'text',
    enum: ProductCategory,
  })
  category: ProductCategory;
}
