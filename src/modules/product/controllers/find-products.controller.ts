import { Get, Query } from '@nestjs/common';
import { FindOptions } from '@app/common';
import { FindProductsService } from '../services';

export class FindProductsController {
  constructor(private findProductsService: FindProductsService) {}

  // TODO: add return type
  @Get()
  async execute(@Query() findProductDto: FindOptions) {
    return this.findProductsService.find(findProductDto);
  }
}
