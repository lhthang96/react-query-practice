import { FieldsHelper, QueryField, QueryFieldExpander, QueryFields } from './FieldsHelper';
import { FiltersHelper, QueryFilter } from './FiltersHelper';
import { QuerySorter, SortersHelper } from './SortersHelper';

export type IGDBQuery<Entity extends object = any> = {
  fields?: QueryFields<Entity>;
  sorters?: QuerySorter<Entity>[];
  filters?: QueryFilter<Entity>[];
  excludes?: QueryField<Entity>[];
  expanders?: QueryFieldExpander<Entity>[];
};

export class QueryHelper {
  private fieldsHelper = new FieldsHelper();
  private sorterHelper = new SortersHelper();
  private filtersHelper = new FiltersHelper();

  public getQueryBody = <Entity extends object = any>(query: IGDBQuery<Entity>): string => {
    const { fields = '*', excludes, expanders, sorters, filters } = query || {};

    // Get fields query
    let result = this.fieldsHelper.getQuery<Entity>(fields, expanders, excludes);

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
}
