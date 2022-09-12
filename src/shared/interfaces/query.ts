import { Game, GameGenre, GameTheme } from './IGDB';

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
  pagination?: QueryPagination;
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
export type QueryFilter<Data extends object = any> = [keyof Data | string, QueryFilterOperator, QueryFilterValue];
export type QueryFilterOperator = '=' | '!=' | '>' | '>=' | '<' | '<=' | '~';
export type QueryFilterValue = string | number | 'null';

/**
 * Pagination
 */
export type QueryPagination = {
  limit: number;
  offset: number;
};

/**
 * Data query interfaces
 */
export type GameScope = 'default' | 'full' | 'search';
export type GenreScope = 'default' | 'full';
export type ThemeScope = 'default' | 'full';

export type GameQuery = IGDBQuery<Game, GameScope>;
export type GenreQuery = IGDBQuery<GameGenre, GenreScope>;
export type ThemeQuery = IGDBQuery<GameTheme, ThemeScope>;
