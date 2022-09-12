import React, { ComponentPropsWithoutRef } from 'react';
import { IGDBClient } from 'src/services';
import { Game } from 'src/shared/interfaces';
import StarFilledIcon from 'src/assets/star_filled.svg';
import { StyledCoverImage, StyledTopGameByGenreItem } from './TopGameByGenreItem.styles';

type TopGameByGenreItemProps = ComponentPropsWithoutRef<'div'> & {
  game: Game;
};

export const TopGameByGenreItem: React.FC<TopGameByGenreItemProps> = (props) => {
  const { game, ...containerProps } = props;
  const { name, cover, themes, total_rating } = game;
  const coverImg = IGDBClient.instance.getImageURL(cover?.image_id, 'cover_big');
  const themeNames = themes.map((theme) => theme.name).join(', ');
  const ratingText = total_rating.toFixed(1);

  return (
    <StyledTopGameByGenreItem {...containerProps}>
      <StyledCoverImage url={coverImg} className="game-cover-img" />
      <div className="game-info">
        <div className="game-overview">
          <span className="game-name">{name}</span>
          <span className="game-themes">{themeNames}</span>
        </div>
        <div className="game-rating">
          <StarFilledIcon className="game-rating-icon" />
          <span className="game-rating-value">{ratingText}</span>
        </div>
      </div>
    </StyledTopGameByGenreItem>
  );
};
