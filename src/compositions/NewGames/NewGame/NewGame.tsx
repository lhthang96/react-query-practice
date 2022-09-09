import { Image } from '@nextui-org/react';
import dayjs from 'dayjs';
import React, { ComponentPropsWithoutRef } from 'react';
import { IGDBClient } from 'src/services';
import { Game, GameReleaseDate } from 'src/shared/interfaces';
import { StyledNewGame } from './NewGame.styles';

type NewGameProps = ComponentPropsWithoutRef<'div'> & {
  game: Game;
};

export const NewGame: React.FC<NewGameProps> = (props) => {
  const { game, ...containerProps } = props;

  const { name, genres, first_release_date, release_dates, cover, created_at } = game;
  const thumbnail = IGDBClient.instance.getImageURL(cover?.image_id, 'thumb');
  const genreNames = genres?.map((genre) => genre.name)?.join(', ');

  const releaseDate = first_release_date
    ? first_release_date
    : release_dates?.length
    ? getLatestReleaseDate(release_dates)
    : created_at;
  const releaseDateText = getReleaseDateText(releaseDate);

  return (
    <StyledNewGame {...containerProps}>
      <div className="thumbnail">
        <Image src={thumbnail} className="thumbnail-img" />
      </div>
      <div className="game-info">
        <div className="game-overview">
          <span className="game-name" title={name}>
            {name}
          </span>
          <span className="game-genres" title={genreNames}>
            {genreNames}
          </span>
        </div>
        <div className="game-release-date">
          <span className="game-release-date-text">{releaseDateText}</span>
        </div>
      </div>
    </StyledNewGame>
  );
};

// #region LOCAL_FUNCTIONS
/**
 *
 * @param releaseDate Unix timestamp in seconds
 * @returns Date text for displaying to user
 */
const getReleaseDateText = (releaseDate: number): string => {
  const date = dayjs.unix(releaseDate);

  const now = dayjs();
  const isToday = date.isSame(now, 'date');
  if (isToday) {
    const hours = now.diff(date, 'hour');
    return hours === 1 ? `An hour ago` : `${hours} hours ago`;
  }

  const yesterday = dayjs(dayjs().subtract(1, 'day'));
  const isYesterday = date.isSame(yesterday, 'date');
  if (isYesterday) return 'Yesterday';

  return date.format('DD.MM');
};

const getLatestReleaseDate = (releaseDates: GameReleaseDate[]): number => {
  let latestDate = releaseDates?.[0]?.date || releaseDates?.[0]?.created_at;

  releaseDates.forEach((releaseDate) => {
    const checkingDate = releaseDate.date || releaseDate.created_at;
    if (checkingDate > latestDate) {
      latestDate = checkingDate;
    }
  });

  return latestDate;
};
// #endregion LOCAL_FUNCTIONS
