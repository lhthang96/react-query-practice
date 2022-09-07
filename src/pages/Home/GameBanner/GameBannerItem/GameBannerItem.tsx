import { Grid, Image } from '@nextui-org/react';
import React, { ComponentPropsWithoutRef, useMemo } from 'react';
import { Rating } from 'src/components';
import { IGDBClient } from 'src/services';
import { Game } from 'src/shared/interfaces';
import { StyledGameBannerItem } from './GameBannerItem.styles';
import CalendarIcon from 'src/assets/calendar.svg';
import UserIcon from 'src/assets/user.svg';
import dayjs from 'dayjs';
import { GameBannerRating } from './GameBannerRating';
import { GameBannerExtraInfo } from './GameBannerExtraInfo';

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

  const getReleaseDateText = (releaseDate: number): string => {
    return dayjs(releaseDate * 1000).format('DD-MM-YYYY');
  };

  return (
    <StyledGameBannerItem backgroundUrl={backgroundURL} {...containerProps}>
      <Grid.Container gap={2} className="content">
        <Grid xs={12} sm={3} className="cover-container">
          <Image src={coverURL} alt={`Cover Image - ${game?.name}`} className="cover-image" />
        </Grid>
        <Grid xs={12} sm={9} className="game-info">
          <div className="game-info-container">
            <div className="header">
              <p className="title">{game?.name}</p>
              <div className="game-overview">
                <GameBannerRating game={game} />
                <div className="game-overview-separator" />
                <GameBannerExtraInfo game={game} />
              </div>
            </div>
            <div className="separator" />
            <p className="summary">{game?.summary}</p>
          </div>
        </Grid>
      </Grid.Container>
    </StyledGameBannerItem>
  );
};
