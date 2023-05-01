import { NotFoundException } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import { TableMetadata } from './find.repository';

export abstract class FindOneAbstractService<TEntity> {
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

  async findOne(findOptionsWhere: FindOptionsWhere<TEntity>) {
    const entity = await this.repository.findOne(findOptionsWhere);

    if (!entity) throw new NotFoundException(`${this.name} not found.`);

    return {
      [`${this.name.toLowerCase()}`]: entity,
    };
  }
}
