import { GameQuery, GenreQuery, IGDBQueryObject, ThemeQuery } from 'src/shared/interfaces';
import { FieldsHelper } from './FieldsHelper';
import { FiltersHelper } from './FiltersHelper';
import { PaginationHelper } from './PaginationHelper';
import { ScopeHelper } from './ScopeHelper';
import { SortersHelper } from './SortersHelper';

export class QueryHelper {
  private fieldsHelper = new FieldsHelper();
  private sorterHelper = new SortersHelper();
  private filtersHelper = new FiltersHelper();
  private scopeHelper = new ScopeHelper();
  private paginationHelper = new PaginationHelper();

  private getQuery = <Entity extends object = any>(query: IGDBQueryObject<Entity>): string => {
    const { fields = '*', excludes, expanders, sorters, filters, search, pagination } = query || {};

    let result = this.fieldsHelper.getQuery<Entity>(fields, expanders, excludes);

    if (search) {
      result = result.concat(`\nsearch "${search}";`);
    }

    if (sorters?.length) {
      const querySorters = this.sorterHelper.getQuery(sorters);
      result = result.concat(`\n${querySorters}`);
    }

    if (filters?.length) {
      const queryFilters = this.filtersHelper.getQuery(filters);
      result = result.concat(`\n${queryFilters}`);
    }

    if (pagination) {
      const queryPagination = this.paginationHelper.getQuery(pagination);
      result = result.concat(`\n${queryPagination}`);
    }

    return result;
  };

  public getGameQuery = (query: GameQuery): string => {
    const { scope, ...rest } = query;
    return this.getQuery({
      ...this.scopeHelper.computeGameFields(scope),
      ...rest
    });
  };

  public getGenreQuery = (query: GenreQuery): string => {
    const { scope, ...rest } = query;
    return this.getQuery({
      ...this.scopeHelper.computeGenreFields(scope),
      ...rest
    });
  };

  public getThemeQuery = (query: ThemeQuery): string => {
    const { scope, ...rest } = query;
    return this.getQuery({
      ...this.scopeHelper.computeThemeFields(scope),
      ...rest
    });
  };
}
