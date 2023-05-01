import { HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Criteria } from '../model/database.model';
import { TableMetadata } from './find.repository';

export abstract class DeleteAbstractService<TEntity> {
  name: string;
  tableName: string;
  searchName: string;

  constructor(
    private repository: Repository<TEntity>,
    metadata: TableMetadata,
  ) {
    this.name = metadata.name;
    this.tableName = metadata.tableName;
    this.searchName = metadata.searchName;
  }

  async delete(criteria: Criteria<TEntity>) {
    try {
      return await this.repository.delete(criteria);
    } catch (error) {
      throw new HttpException(
        `${criteria} is not deleted.`,
        HttpStatus.NOT_MODIFIED,
      );
    }
  }
}
