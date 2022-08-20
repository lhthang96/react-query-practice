import React, { ReactElement } from 'react';
import { useQueryGame } from 'src/hooks';

export const Home: React.FC = () => {
  const { isLoading, isError, error, data: games = [] } = useQueryGame();

  const renderContent = (): ReactElement => {
    if (isLoading) return <span>Loading...</span>;
    if (isError) return <pre>{JSON.stringify(error, undefined, 4)}</pre>;
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
