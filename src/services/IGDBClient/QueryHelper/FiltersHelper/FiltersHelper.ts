import { QueryFilter } from 'src/shared/interfaces';

export class FiltersHelper {
  public getQuery = <Entity extends object = any>(filters: QueryFilter<Entity>[] = []): string => {
    if (!filters.length) return undefined;

    const combinedFilters = filters
      .map(([field, operator, value]) => `${field.toString()} ${operator} ${value}`)
      .join(' & ');
    return `where ${combinedFilters};`;
  };
}
