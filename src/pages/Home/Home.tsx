import { Grid } from '@nextui-org/react';
import React from 'react';
import { GameBanner } from './GameBanner';
import { StyledHome } from './Home.styles';
import { HomeSidebar } from './HomeSidebar';
import { TopGameListByGenre } from './TopGameListByGenre';

export const Home: React.FC = () => {
  return (
    <StyledHome>
      <Grid xs={12} sm={9} className="home-content">
        <GameBanner className="game-banner" />
        <TopGameListByGenre genreId={12} className="top-game-list-by-genre" />
      </Grid>
      <Grid xs={0} sm={3} className="home-right-container">
        <HomeSidebar />
      </Grid>
    </StyledHome>
  );
};
