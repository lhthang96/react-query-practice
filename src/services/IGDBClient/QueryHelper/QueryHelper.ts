export class QueryHelper {
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
    return `fields ${combinedFields};`;
  };
}
