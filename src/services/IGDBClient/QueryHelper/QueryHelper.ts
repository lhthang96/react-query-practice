import { FieldsHelper, QueryField, QueryFieldExpander, QueryFields } from './FieldsHelper';
import { FiltersHelper, QueryFilter } from './FiltersHelper';
import { QuerySorter, SortersHelper } from './SortersHelper';

type IGDBQuery<Entity extends object = any> = {
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

  public getGameQueryFields = (): string => {
    const common =
      'id,name,summary,storyline,status,category,first_release_date,follows,total_rating,total_rating_count,url';
    const cover = 'cover.animated,cover.width,cover.height,cover.url';
    const gameMode = 'game_modes.id,game_modes.name';
    const screenshots = 'screenshots.id,screenshots.width,screenshots.height,screenshots.url';
    const genres = 'genres.id,genres.name';
    const release_dates = 'release_dates.category,release_dates.date,release_dates.region';
    const similar_games = 'similar_games.id,similar_games.name,similar_games.url';
    const platforms = 'platforms.name,platforms.category';

    const combinedFields = [common, cover, gameMode, screenshots, genres, release_dates, similar_games, platforms].join(
      ','
    );
    return this.fieldsHelper.getQuery(combinedFields);
  };

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
