import { Button } from '@nextui-org/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TopGames } from './TopGames';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const goToSearchPage = (): void => {
    navigate({ pathname: '/search' });
  };

  return (
    <main>
      <Button onClick={goToSearchPage}>Search</Button>
      <TopGames />
    </main>
  );
};
