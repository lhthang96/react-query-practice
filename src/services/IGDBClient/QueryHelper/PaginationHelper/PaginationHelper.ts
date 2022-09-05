import { QueryPagination } from 'src/shared/interfaces';

export class PaginationHelper {
  public getQuery = (pagination?: QueryPagination): string => {
    if (!pagination) return undefined;

    const { limit, offset } = pagination;
    return `limit ${limit}; offset ${offset};`;
  };
}
