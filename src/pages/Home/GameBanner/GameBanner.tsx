import React, { ComponentPropsWithoutRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useQueryGame } from 'src/hooks';
import { GameBannerItem } from './GameBannerItem';
import { StyledGameBanner } from './GameBanner.styles';

type GameBannerProps = ComponentPropsWithoutRef<'div'>;

export const GameBanner: React.FC<GameBannerProps> = (props) => {
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
    <StyledGameBanner {...props}>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="carousel-container">
        {topGames.map((topGame) => (
          <GameBannerItem key={topGame.id} game={topGame} />
        ))}
      </Carousel>
    </StyledGameBanner>
  );
};
