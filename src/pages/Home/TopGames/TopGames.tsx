import React, { ComponentPropsWithoutRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useQueryGame } from 'src/hooks';
import { TopGame } from './TopGame';
import { StyledTopGames } from './TopGames.styles';

type TopGamesProps = ComponentPropsWithoutRef<'div'>;

export const TopGames: React.FC<TopGamesProps> = (props) => {
  const { data: topGames = [] } = useQueryGame({
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
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {topGames.map((topGame) => (
          <TopGame key={topGame.id} game={topGame} />
        ))}
      </Carousel>
    </StyledTopGames>
  );
};
