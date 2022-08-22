import { Game } from './IGDB';

/**
 * Query
 */
export type IGDBQuery<Data extends object, Scope> = Omit<IGDBQueryObject<Data>, 'fields' | 'excludes' | 'expanders'> & {
  scope: Scope;
};

export type IGDBQueryObject<Data extends object = any> = {
  search?: string;
  fields?: QueryFields<Data>;
  sorters?: QuerySorter<Data>[];
  filters?: QueryFilter<Data>[];
  excludes?: (keyof Data)[];
  expanders?: QueryExpanders<Data>;
};

/**
 * Fields
 */
export type QueryFields<Data extends object = any> = (keyof Data)[] | string;
export type QueryExpanders<Data extends object = any> = {
  [key in keyof Data]?:
    | (Data[key] extends readonly (infer ElementType)[] ? keyof ElementType : keyof Data[key])[]
    | ['*'];
};

/**
 * Sorter
 */
export type QuerySorter<Data extends object = any> = [keyof Data, QuerySorterOrder];
export type QuerySorterOrder = 'desc' | 'asc';

/**
 * Filters
 */
export type QueryFilter<Data extends object = any> = [keyof Data, QueryFilterOperator, QueryFilterValue];
export type QueryFilterOperator = '=' | '!=' | '>' | '>=' | '<' | '<=' | '~';
export type QueryFilterValue = string | number | 'null';

/**
 * Data query interfaces
 */
export type GameScope = 'default' | 'full' | 'search';
export type GameQuery = IGDBQuery<Game, GameScope>;
