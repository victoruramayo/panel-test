import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { RoleGuard } from '../auth/guards/roles.guard';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { Rol } from '../users/entities/User';
import { Roles } from '../auth/decorators/roles';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  @Roles(Rol.ADMIN)
  @UseGuards(JwtGuard, RoleGuard)
  createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  @Roles(Rol.ADMIN)
  @UseGuards(JwtGuard, RoleGuard)
  updateProduct(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  @Roles(Rol.ADMIN)
  @UseGuards(JwtGuard, RoleGuard)
  removeProduct(@Param('id') id: number): Promise<void> {
    return this.productService.remove(id);
  }

  @Get('/category')
  getCategories(): { key: string; value: string }[] {
    return this.productService.getCategories();
  }
}