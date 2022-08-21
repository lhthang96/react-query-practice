export type QueryFilter<Entity extends object = any> = [keyof Entity, QueryFilterOperator, QueryFilterValue];
export type QueryFilterOperator = '=' | '!=' | '>' | '>=' | '<' | '<=' | '~';
export type QueryFilterValue = string | number | 'null';

export class FiltersHelper {
  public getQuery = <Entity extends object = any>(filters: QueryFilter<Entity>[] = []): string => {
    if (!filters.length) return undefined;

    return filters.map(([field, operator, value]) => `where ${field.toString()} ${operator} ${value};`).join('\n');
  };
}
