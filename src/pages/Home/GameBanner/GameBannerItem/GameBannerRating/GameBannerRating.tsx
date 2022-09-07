import React, { ComponentPropsWithoutRef } from 'react';
import { Rating } from 'src/components';
import { Game } from 'src/shared/interfaces';
import { StyledGameBannerRating } from './GameBannerRating.styles';

/**
 * Scale of total rating that is using by IGDB
 */
const TOTAL_RATING_SCALE = 100;

/**
 * Scale of rating for displaying on UI
 */
const DISPLAY_RATING_SCALE = 10;

type GameBannerRatingProps = ComponentPropsWithoutRef<'div'> & {
  game: Game;
};

export const GameBannerRating: React.FC<GameBannerRatingProps> = (props) => {
  const { game, ...containerProps } = props;

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
    return `${fixedRating} points based on ${totalRatingCount} members`;
  };

  return (
    <StyledGameBannerRating {...containerProps}>
      <Rating value={calculateRatingValue(game?.total_rating)} />
      <span className="rating-description">{getRatingDescription(game?.total_rating, game?.total_rating_count)}</span>
    </StyledGameBannerRating>
  );
};
