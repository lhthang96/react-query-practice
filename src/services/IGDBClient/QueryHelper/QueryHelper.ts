import { GameQuery, IGDBQueryObject } from 'src/shared/interfaces';
import { FieldsHelper } from './FieldsHelper';
import { FiltersHelper } from './FiltersHelper';
import { ScopeHelper } from './ScopeHelper';
import { SortersHelper } from './SortersHelper';

export class QueryHelper {
  private fieldsHelper = new FieldsHelper();
  private sorterHelper = new SortersHelper();
  private filtersHelper = new FiltersHelper();
  private scopeHelper = new ScopeHelper();

  private getQuery = <Entity extends object = any>(query: IGDBQueryObject<Entity>): string => {
    const { fields = '*', excludes, expanders, sorters, filters, search } = query || {};

    // Get fields query
    let result = this.fieldsHelper.getQuery<Entity>(fields, expanders, excludes);

    if (search) {
      result = result.concat(`\nsearch "${search}";`);
    }

    // Get sorters query
    if (sorters?.length) {
      const querySorters = this.sorterHelper.getQuery(sorters);
      result = result.concat(`\n${querySorters}`);
    }

    // Get filters query
    if (filters?.length) {
      const queryFilters = this.filtersHelper.getQuery(filters);
      result = result.concat(`\n${queryFilters}`);
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
}
