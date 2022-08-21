import { useQuery, UseQueryResult } from 'react-query';
import { Game, GameScope, IGDBQuery } from 'src/shared/interfaces';
import { IGDBClient } from 'src/services';

export const useQueryGame = (query: IGDBQuery<Game, GameScope>): UseQueryResult<Game[]> => {
  return useQuery(['games', query], async (): Promise<Game[]> => {
    return await IGDBClient.instance.getGames(query);
  });
};
