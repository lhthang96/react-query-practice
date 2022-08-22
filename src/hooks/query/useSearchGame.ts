import { useQuery, UseQueryResult } from 'react-query';
import { IGDBClient } from 'src/services';
import { Game, GameScope, IGDBQuery } from 'src/shared/interfaces';

export const useSearchGame = (
  keyword: string,
  otherQuery?: Omit<IGDBQuery<Game, GameScope>, 'search'>
): UseQueryResult<Game[]> => {
  return useQuery(['games', keyword, otherQuery], async (): Promise<Game[]> => {
    return keyword ? await IGDBClient.instance.getGames({ search: keyword, ...otherQuery }) : [];
  });
};
