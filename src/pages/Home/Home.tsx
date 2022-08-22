import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryGame } from 'src/hooks';

export const Home: React.FC = () => {
  const {
    isLoading,
    isError,
    error,
    data: games = []
  } = useQueryGame({
    scope: 'default',
    sorters: [
      ['total_rating', 'desc'],
      ['follows', 'desc']
    ],
    filters: [
      ['total_rating', '=', 'null'],
      ['follows', '!=', 'null']
    ]
  });

  const navigate = useNavigate();
  const goToSearchPage = (): void => {
    navigate({ pathname: '/search' });
  };

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

  return (
    <main>
      <button onClick={goToSearchPage}>Search</button>
      {renderContent()}
    </main>
  );
};
