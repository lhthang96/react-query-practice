import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { IGDBClient } from 'src/services';

export const Home: React.FC = () => {
  const {
    isLoading,
    error,
    data: games = []
  } = useQuery('games', async (): Promise<any[]> => {
    return await IGDBClient.instance.getGames();
  });

  const renderContent = (): ReactElement => {
    if (isLoading) return <span>Loading...</span>;
    if (error) return <pre>{JSON.stringify(error, undefined, 4)}</pre>;
    return (
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    );
  };

  return <main>{renderContent()}</main>;
};
