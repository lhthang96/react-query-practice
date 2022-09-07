import { Grid, Image } from '@nextui-org/react';
import React, { ComponentPropsWithoutRef, useMemo } from 'react';
import { IGDBClient } from 'src/services';
import { Game } from 'src/shared/interfaces';
import { GameBannerExtraInfo } from './GameBannerExtraInfo';
import { StyledGameBannerItem } from './GameBannerItem.styles';
import { GameBannerRating } from './GameBannerRating';

type GameBannerItemProps = ComponentPropsWithoutRef<'div'> & {
  game: Game;
};

export const GameBannerItem: React.FC<GameBannerItemProps> = (props) => {
  const { game, ...containerProps } = props;
  const coverURL = useMemo(() => game && IGDBClient.instance.getImageURL(game?.cover?.image_id, 'cover_big'), [game]);
  const backgroundURL = useMemo(
    () => game && IGDBClient.instance.getImageURL(game?.screenshots?.[0]?.image_id, 'screenshot_huge'),
    [game]
  );

  return (
    <StyledGameBannerItem backgroundUrl={backgroundURL} {...containerProps}>
      <Grid.Container gap={2} className="content">
        <Grid xs={12} sm={3} className="cover-container">
          <Image src={coverURL} alt={`Cover Image - ${game?.name}`} className="cover-image" />
        </Grid>
        <Grid xs={12} sm={9} className="game-info">
          <div className="header">
            <p className="title">{game?.name}</p>
            <div className="game-overview">
              <GameBannerRating game={game} />
              <div className="game-overview-separator" />
              <GameBannerExtraInfo game={game} />
            </div>
          </div>
          <p className="summary">{game?.summary}</p>
        </Grid>
      </Grid.Container>
    </StyledGameBannerItem>
  );
};
