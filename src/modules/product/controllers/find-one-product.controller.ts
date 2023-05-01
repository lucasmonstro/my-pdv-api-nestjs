import { Get, Param } from '@nestjs/common';
import { FindOneProductService } from '../services';

export class FindOneOneProductController {
  constructor(private findOneProductService: FindOneProductService) {}

  // TODO: return types
  @Get(':name')
  async execute(@Param('name') name: string) {
    return this.findOneProductService.findOne({ name });
  }
}
