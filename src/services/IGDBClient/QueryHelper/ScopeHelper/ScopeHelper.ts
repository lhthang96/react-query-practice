import { Game, GameScope, IGDBQueryObject } from 'src/shared/interfaces';

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
            platforms: ['*']
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
            cover: ['animated', 'width', 'height', 'url'],
            screenshots: ['id', 'height', 'width', 'url']
          }
        };
    }
  };
}
