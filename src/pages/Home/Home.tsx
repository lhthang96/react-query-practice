import { Grid } from '@nextui-org/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GameBanner } from './GameBanner';
import { StyledHome } from './Home.styles';
import { HomeSidebar } from './HomeSidebar';

export const Home: React.FC = () => {
  const navigate = useNavigate();

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
      <Grid xs={12} sm={9} className="home-content">
        <GameBanner />
      </Grid>
      <Grid xs={0} sm={3} className="home-right-container">
        <HomeSidebar />
      </Grid>
    </StyledHome>
  );
};
