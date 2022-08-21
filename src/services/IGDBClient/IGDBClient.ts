import { HTTPClient } from './HTTPClient';
import { Game } from 'src/shared/interfaces';
import { TwitchClient } from './TwitchClient';
import { QueryHelper } from './QueryHelper';
import { QueryFilterOperator } from './QueryHelper/FiltersHelper';

export class IGDBClient {
  private static _instance: IGDBClient;

  public static get instance(): IGDBClient {
    return IGDBClient._instance || new IGDBClient();
  }

  private readonly BASE_URL = process.env.IGDB_BASE_URL;
  private httpClient = new HTTPClient({ baseURL: this.BASE_URL });
  private twitchClient = new TwitchClient();
  private queryHelper = new QueryHelper();

  private getHeaders = async (): Promise<any> => {
    const token = await this.twitchClient.getToken();
    const clientId = this.twitchClient.getClientId();
    return {
      Authorization: `Bearer ${token}`,
      'Client-ID': clientId,
      'Content-Type': 'text/plain'
    };
  };

  public getGames = async (): Promise<Game[]> => {
    const query = this.queryHelper.getQueryBody<Game>({
      fields: '*',
      sorters: [
        ['total_rating', 'desc'],
        ['follows', 'desc']
      ],
      filters: [['total_rating', '=', 'null']],
      expanders: [['cover', ['animated', 'width', 'height', 'url']]]
    });
    const headers = await this.getHeaders();
    const result = await this.httpClient.post<Game[]>('/games', query, { headers });
    return result.data;
  };
}
