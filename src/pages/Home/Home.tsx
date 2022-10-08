import { Grid } from '@nextui-org/react';
import React, { ReactElement, useEffect, useState } from 'react';
import { withScriptErrorBoundary } from 'src/hoc/withScriptErrorBoundary';
import { GameBanner } from './GameBanner';
import { TOP_GENRES } from './Home.constant';
import { StyledHome } from './Home.styles';
import { HomeSidebar } from './HomeSidebar';
import { TopGameListByGenre } from './TopGameListByGenre';

const HomeContent: React.FC = () => {
  const renderTopGameListByGenre = (): ReactElement[] => {
    return TOP_GENRES.map(({ id: genreId, name: genreName }) => (
      <TopGameListByGenre
        key={`top-game-genre-${genreId}`}
        genreId={genreId}
        genreName={genreName}
        className="top-game-list-by-genre"
      />
    ));
  };

  const [error, setError] = useState<string>();
  useEffect(() => {
    window.setTimeout(() => {
      // throw new Error('Testing error');
      setError(() => {
        throw new Error('Testing error');
      });
    }, 2000);
  }, []);

  return (
    <StyledHome>
      <Grid xs={12} sm={9} className="home-content">
        <GameBanner className="game-banner" />
        {renderTopGameListByGenre()}
      </Grid>
      <Grid xs={0} sm={3} className="home-right-container">
        <HomeSidebar />
      </Grid>
    </StyledHome>
  );
};

// export const Home = withScriptErrorBoundary(HomeContent);
export const Home = HomeContent;
