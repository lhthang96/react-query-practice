import { Image } from '@nextui-org/react';
import React, { ComponentPropsWithoutRef, useMemo } from 'react';
import { IGDBClient } from 'src/services';
import { Game } from 'src/shared/interfaces';
import { StyledTopGame } from './TopGame.styles';

type TopGameProps = ComponentPropsWithoutRef<'div'> & {
  game: Game;
};

export const TopGame: React.FC<TopGameProps> = (props) => {
  const { game, ...containerProps } = props;
  const coverURL = useMemo(() => game && IGDBClient.instance.getImageURL(game?.cover?.image_id, 'cover_big'), [game]);
  const backgroundURL = useMemo(
    () => game && IGDBClient.instance.getImageURL(game?.screenshots?.[0]?.image_id, 'screenshot_huge'),
    [game]
  );

  return (
    <StyledTopGame backgroundUrl={backgroundURL} {...containerProps}>
      <div className="content">
        <div className="cover">
          <Image src={coverURL} />
        </div>
        <div className="description">
          <p className="title">{game?.name}</p>
          <p className="storyline">{game?.storyline}</p>
        </div>
      </div>
    </StyledTopGame>
  );
};
