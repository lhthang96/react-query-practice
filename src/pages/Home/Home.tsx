import { Button } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useQueryGame } from 'src/hooks';
import { IGDBClient } from 'src/services';
import { GameGenre, GameTheme } from 'src/shared/interfaces';
import { StyledHome } from './Home.styles';
import { TopGames } from './TopGames';

const CURRENT_TIME = new Date().getTime() / 1000;
const NEXT_WEEK_TIME = (new Date().getTime() + 7 * 24 * 60 * 60 * 1000) / 1000;

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const goToSearchPage = (): void => {
    navigate({ pathname: '/search' });
  };

  useQuery('genres', async (): Promise<GameGenre[]> => {
    return await IGDBClient.instance.getGenres({ scope: 'default', pagination: { limit: 100, offset: 0 } });
  });

  useQuery('themes', async (): Promise<GameTheme[]> => {
    return await IGDBClient.instance.getThemes({ scope: 'default', pagination: { limit: 100, offset: 0 } });
  });

  // Most recent games
  // const {} = useQueryGame({
  //   scope: 'default',
  //   sorters: [['first_release_date', 'desc']]
  // });

  // Upcoming games
  // console.log('Render...');
  // const { data } = useQueryGame({
  //   scope: 'default',
  //   filters: [
  //     ['first_release_date', '>', CURRENT_TIME],
  //     ['first_release_date', '<', NEXT_WEEK_TIME]
  //   ],
  //   sorters: [['first_release_date', 'asc']]
  // });

  // useEffect(() => {
  //   console.log({ data });
  //   const imageUrls: { [id: string]: string } = {};
  //   data?.forEach((game) => {
  //     if (!game.cover?.image_id) return;
  //     const url = IGDBClient.instance.getImageURL(game.cover.image_id, 'logo_med');
  //     imageUrls[game.cover.image_id] = url;
  //   });
  //   console.log({ imageUrls });
  // }, [data]);

  return (
    <StyledHome>
      <Button onClick={goToSearchPage}>Search</Button>
      <TopGames className="top-games" />
    </StyledHome>
  );
};
