import { useQuery, UseQueryResult } from 'react-query';
import { Game } from 'src/shared/interfaces';
import { IGDBClient } from 'src/services';

export const useQueryGame = (): UseQueryResult<Game[]> => {
  return useQuery('games', async (): Promise<Game[]> => {
    return await IGDBClient.instance.getGames();
  });
};
