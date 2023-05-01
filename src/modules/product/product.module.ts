import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetDatabaseProviders } from '@app/common';
import {
  CreateProductController,
  DeleteProductController,
  FindOneOneProductController,
  FindProductsController,
} from './controllers';
import { Product } from './models';
import {
  CreateProductService,
  DeleteProductService,
  FindOneProductService,
  FindProductsService,
} from './services';

@Module({
  controllers: [
    CreateProductController,
    DeleteProductController,
    FindProductsController,
    FindOneOneProductController,
  ],
  providers: [
    CreateProductService,
    DeleteProductService,
    FindProductsService,
    FindOneProductService,
    ...GetDatabaseProviders(Product),
  ],
  imports: [TypeOrmModule.forFeature([Product])],
})
export class ProductModule {}
