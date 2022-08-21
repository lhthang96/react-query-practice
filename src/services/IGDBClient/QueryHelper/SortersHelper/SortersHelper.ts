import { QuerySorter } from 'src/shared/interfaces';

export class SortersHelper {
  public getQuery = <Entity extends object = any>(sorters: QuerySorter<Entity>[] = []): string => {
    if (!sorters.length) return undefined;

    return sorters.map(([field, order]) => `sort ${field.toString()} ${order};`).join('\n');
  };
}
