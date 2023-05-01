import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TableMetadata } from '@app/common';
import { CreateAbstractService } from '@app/common/database/repositories';
import { Product } from '../models/product.model';

@Injectable()
export class CreateProductService extends CreateAbstractService<Product> {
  constructor(
    @InjectRepository(Product) repository: Repository<Product>,
    @Inject(TableMetadata.name) tableMetadata: TableMetadata,
  ) {
    super(repository, tableMetadata);
  }
}
