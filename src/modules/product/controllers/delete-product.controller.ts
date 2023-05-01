import { UseGuards, Delete, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../../Auth/guards/jwt-auth.guard';
import { DeleteProductService } from '../services';

export class DeleteProductController {
  constructor(private deleteProductService: DeleteProductService) {}

  @Delete(':name')
  @UseGuards(JwtAuthGuard)
  async execute(@Param('name') name: string) {
    return this.deleteProductService.delete(name);
  }
}
