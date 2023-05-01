import { UseGuards, Post, Body } from '@nestjs/common';
import { CreateProductDto } from '../dtos';
import { JwtAuthGuard } from '../../Auth/guards/jwt-auth.guard';
import { CreateProductService } from '../services';

export class CreateProductController {
  constructor(private createProductService: CreateProductService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async execute(
    @Body() createProductDto: CreateProductDto,
  ): ReturnType<CreateProductService['create']> {
    return this.createProductService.create(createProductDto);
  }
}
