import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TableMetadata } from '@app/common';
import { FindOneAbstractService } from '@app/common/database/repositories';
import { Product } from '../models';

@Injectable()
export class FindOneProductService extends FindOneAbstractService<Product> {
  constructor(
    @InjectRepository(Product) repository: Repository<Product>,
    @Inject(TableMetadata.name) tableMetadata: TableMetadata,
  ) {
    super(repository, tableMetadata);
  }
}
