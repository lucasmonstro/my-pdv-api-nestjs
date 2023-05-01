import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { TableMetadata } from '../repositories/find.repository';
import { FactoryProvider } from '@nestjs/common';
import { SearchableKey } from '../decorators/search.decorator';

export const TableMetadataProvider = (model: any): FactoryProvider => ({
  provide: TableMetadata.name,
  inject: [DataSource],
  useFactory: (dataSource: DataSource): TableMetadata => {
    const searchName = Reflect.getMetadata(SearchableKey, model);
    const { targetName, tableName } = dataSource.getMetadata(model);

    const invalidClass = !model || !model?.name;
    if (invalidClass) {
      throw new Error(
        `Class model not provider in ${TableMetadataProvider.name}`,
      );
    }

    const classMetadataNotFound = !searchName || !targetName || !tableName;
    if (classMetadataNotFound) {
      throw new Error(`metadata not found in ${model.name} class.`);
    }

    return {
      name: targetName,
      searchName,
      tableName,
    };
  },
});
