import { Grid, Image } from '@nextui-org/react';
import React, { ComponentPropsWithoutRef, useMemo } from 'react';
import Rating from 'react-stars';
import { IGDBClient } from 'src/services';
import { Game } from 'src/shared/interfaces';
import { StyledTopGame } from './TopGame.styles';
import CalendarIcon from 'src/assets/calendar.svg';
import UserIcon from 'src/assets/user.svg';
import dayjs from 'dayjs';

type TopGameProps = ComponentPropsWithoutRef<'div'> & {
  game: Game;
};

/**
 * Scale of total rating that is using by IGDB
 */
const TOTAL_RATING_SCALE = 100;

/**
 * Scale of rating for displaying on UI
 */
const DISPLAY_RATING_SCALE = 10;

export const TopGame: React.FC<TopGameProps> = (props) => {
  const { game, ...containerProps } = props;
  const coverURL = useMemo(() => game && IGDBClient.instance.getImageURL(game?.cover?.image_id, 'cover_big'), [game]);
  const backgroundURL = useMemo(
    () => game && IGDBClient.instance.getImageURL(game?.screenshots?.[0]?.image_id, 'screenshot_huge'),
    [game]
  );

  const calculateRatingValue = (rating: number): number => {
    const fixedRating = +((rating * DISPLAY_RATING_SCALE) / TOTAL_RATING_SCALE).toFixed(1);
    const floorRating = Math.floor(fixedRating);
    const difference = fixedRating - floorRating;

    if (difference > 0.75) {
      return Math.round(fixedRating);
    }

    if (difference < 0.25) {
      return floorRating;
    }

    return floorRating + 0.5;
  };
  const getRatingDescription = (totalRating: number, totalRatingCount: number): string => {
    const fixedRating = +totalRating.toFixed(1);
    return `${fixedRating} points based on ${totalRatingCount} member ratings`;
  };

  const getReleaseDateText = (releaseDate: number): string => {
    return dayjs(releaseDate * 1000).format('DD-MM-YYYY');
  };

  return (
    <StyledTopGame backgroundUrl={backgroundURL} {...containerProps}>
      <Grid.Container gap={2} className="content">
        <Grid xs={12} sm={3} className="cover-container">
          <Image src={coverURL} />
        </Grid>
        <Grid xs={12} sm={9} className="description">
          <div className="description-container">
            <div className="header">
              <p className="title">{game?.name}</p>
              <div className="extra-info">
                <div className="rating">
                  <Rating
                    count={DISPLAY_RATING_SCALE}
                    value={calculateRatingValue(game?.total_rating)}
                    edit={false}
                    half
                  />
                  <span className="rating-description">
                    {getRatingDescription(game?.total_rating, game?.total_rating_count)}
                  </span>
                </div>
                <div className="extra-info-separator" />
                <div className="follow">
                  <UserIcon className="follow-icon" />
                  <span className="follow-text">{game?.follows}</span>
                </div>
                <div className="release-date">
                  <CalendarIcon className="release-date-icon" />
                  <span className="release-date-text">{getReleaseDateText(game?.first_release_date)}</span>
                </div>
              </div>
            </div>
            <div className="separator" />
            <p className="summary">{game?.summary}</p>
          </div>
        </Grid>
      </Grid.Container>
    </StyledTopGame>
  );
};
