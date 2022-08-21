import { useQuery, UseQueryResult } from 'react-query';
import { Game } from 'src/shared/interfaces';
import { IGDBClient } from 'src/services';
import { IGDBQuery } from 'src/services/IGDBClient/QueryHelper';

export const useQueryGame = (query: IGDBQuery<Game>): UseQueryResult<Game[]> => {
  return useQuery(['games', query], async (): Promise<Game[]> => {
    return await IGDBClient.instance.getGames(query);
  });
};
