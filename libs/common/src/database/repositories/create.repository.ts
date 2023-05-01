import { ConflictException } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { TableMetadata } from './find.repository';

export abstract class CreateAbstractService<TEntity> {
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

  async create(dto: DeepPartial<TEntity>) {
    const entity = this.repository.create(dto);

    try {
      await this.repository.save(entity);

      return {
        [`${this.name.toLowerCase()}`]: entity,
      };
    } catch (error) {
      throw new ConflictException(`${this.name} already exists.`);
    }
  }
}
