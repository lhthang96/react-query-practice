import { Button } from '@nextui-org/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledHome } from './Home.styles';
import { TopGames } from './TopGames';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const goToSearchPage = (): void => {
    navigate({ pathname: '/search' });
  };

  return (
    <StyledHome>
      <Button onClick={goToSearchPage}>Search</Button>
      <TopGames className="top-games" />
    </StyledHome>
  );
};
