import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductModel } from './product.model';

@Controller('product')
export class ProductController {
	@Post('create')
	async create(@Body() dto: Omit<ProductModel, '_id'>) {}

	@Get()
	async get(@Param('id') id: string) {}

	@Delete()
	async delete(@Param('id') id: string) {}

	@Patch()
	async patch(@Param('id') id:string, @Body() dto: ProductModel) {}
}
