import { Game, GameGenre, GameScope, GameTheme, GenreScope, IGDBQueryObject, ThemeScope } from 'src/shared/interfaces';

export class ScopeHelper {
  public computeGameFields = (scope: GameScope): Pick<IGDBQueryObject<Game>, 'fields' | 'expanders' | 'excludes'> => {
    switch (scope) {
      case 'full':
        return {
          fields: '*',
          expanders: {
            cover: ['*'],
            game_modes: ['*'],
            screenshots: ['*'],
            genres: ['*'],
            release_dates: ['*'],
            similar_games: ['cover', 'id', 'name'],
            platforms: ['*'],
            involved_companies: ['*']
          }
        };

      case 'search':
        return {
          fields: ['id', 'name', 'cover'],
          expanders: {
            cover: ['animated', 'height', 'width', 'url']
          }
        };

      default:
        return {
          fields: '*',
          expanders: {
            cover: ['animated', 'width', 'height', 'url', 'image_id'],
            screenshots: ['id', 'height', 'width', 'url', 'image_id'],
            involved_companies: ['id', 'developer', 'company'],
            genres: ['id', 'name'],
            release_dates: ['*']
          }
        };
    }
  };

  public computeGenreFields = (
    scope: GenreScope
  ): Pick<IGDBQueryObject<GameGenre>, 'fields' | 'expanders' | 'excludes'> => {
    return {
      fields: '*'
    };
  };

  public computeThemeFields = (
    scope: ThemeScope
  ): Pick<IGDBQueryObject<GameTheme>, 'fields' | 'expanders' | 'excludes'> => {
    return {
      fields: '*'
    };
  };
}
