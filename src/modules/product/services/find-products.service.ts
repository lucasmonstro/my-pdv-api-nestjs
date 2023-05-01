import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../models/product.model';
import {
  QueryBuilder,
  QueryRunner,
  Repository,
  SelectQueryBuilder,
} from 'typeorm';
import {
  TableMetadata,
  QueryRunnerProvider,
  FindAbstractService,
} from '@app/common';

@Injectable()
export class FindProductsService extends FindAbstractService<Product> {
  constructor(
    @InjectRepository(Product) repository: Repository<Product>,
    @Inject(QueryBuilder.name) queryBuilder: SelectQueryBuilder<Product>,
    @Inject(QueryRunnerProvider.name) queryRunner: QueryRunner,
    @Inject(TableMetadata.name) tableMetadata: TableMetadata,
  ) {
    super(repository, queryBuilder, queryRunner, tableMetadata);
  }
}
