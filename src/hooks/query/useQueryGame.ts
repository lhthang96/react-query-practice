import { useQuery, UseQueryResult } from 'react-query';
import { IGDBClient } from 'src/services';
import { Game, GameScope, IGDBQuery } from 'src/shared/interfaces';

export const useQueryGame = (query: IGDBQuery<Game, GameScope>): UseQueryResult<Game[]> => {
  return useQuery(['games', query], async (): Promise<Game[]> => {
    return await IGDBClient.instance.getGames(query);
  });
};
