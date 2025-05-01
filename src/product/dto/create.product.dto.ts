// src/products/dto/create-product.dto.ts
import {
  IsNotEmpty,
  IsEnum,
  IsString,
  IsNumber,
  Min,
  MaxLength,
  IsOptional,
} from 'class-validator';
import { ProductCategory } from '../entities/category.enum';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsEnum(ProductCategory, {
    message: `Category must be one of: ${Object.values(ProductCategory).join(', ')}`,
  })
  category: ProductCategory;
}
