import { Game, GameGenre, GameQuery, GameTheme, GenreQuery, ImageSize, ThemeQuery } from 'src/shared/interfaces';
import { HTTPClient } from './HTTPClient';
import { QueryHelper } from './QueryHelper';
import { TwitchClient } from './TwitchClient';

export class IGDBClient {
  private static _instance: IGDBClient;

  public static get instance(): IGDBClient {
    return IGDBClient._instance || new IGDBClient();
  }

  private readonly BASE_URL = process.env.IGDB_BASE_URL;
  private http = new HTTPClient({ baseURL: this.BASE_URL });
  private twitch = new TwitchClient();
  private queryHelper = new QueryHelper();

  private getHeaders = async (): Promise<any> => {
    const token = await this.twitch.getToken();
    const clientId = this.twitch.getClientId();
    return {
      Authorization: `Bearer ${token}`,
      'Client-ID': clientId,
      'Content-Type': 'text/plain'
    };
  };

  public getGames = async (query: GameQuery): Promise<Game[]> => {
    const headers = await this.getHeaders();
    const body = this.queryHelper.getGameQuery(query);
    const result = await this.http.post<Game[]>('/games', body, { headers });
    return result.data;
  };

  public getImageURL = (imageId: string, size: ImageSize): string => {
    return `https://images.igdb.com/igdb/image/upload/t_${size}/${imageId}.jpg`;
  };

  public getGenres = async (query: GenreQuery): Promise<GameGenre[]> => {
    const headers = await this.getHeaders();
    const body = this.queryHelper.getGenreQuery(query);
    const result = await this.http.post<GameGenre[]>('/genres', body, { headers });
    return result.data;
  };

  public getThemes = async (query: ThemeQuery): Promise<GameTheme[]> => {
    const headers = await this.getHeaders();
    const body = this.queryHelper.getThemeQuery(query);
    const result = await this.http.post<GameTheme[]>('/themes', body, { headers });
    return result.data;
  };
}
