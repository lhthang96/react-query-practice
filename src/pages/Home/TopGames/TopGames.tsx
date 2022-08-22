import React, { ComponentPropsWithoutRef } from 'react';
import { useQueryGame } from 'src/hooks';
import { TopGame } from './TopGame';
import { StyledTopGames } from './TopGames.styles';

type TopGamesProps = ComponentPropsWithoutRef<'div'>;

export const TopGames: React.FC<TopGamesProps> = (props) => {
  const {
    isLoading,
    isError,
    error,
    data: topGames = []
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

  return (
    <StyledTopGames>
      {topGames.map((topGame) => (
        <TopGame key={topGame.id} game={topGame} />
      ))}
    </StyledTopGames>
  );
};
