import dayjs from 'dayjs';
import React, { ComponentPropsWithoutRef } from 'react';
import CalendarIcon from 'src/assets/calendar.svg';
import UserIcon from 'src/assets/user.svg';
import { Game } from 'src/shared/interfaces';
import { StyledGameBannerExtraInfo } from './GameBannerExtraInfo.styles';

type GameBannerExtraInfoProps = ComponentPropsWithoutRef<'div'> & {
  game: Game;
};

export const GameBannerExtraInfo: React.FC<GameBannerExtraInfoProps> = (props) => {
  const { game, ...containerProps } = props;

  const getFollowsText = (follows: number): string => {
    return `Followed by ${follows} members`;
  };

  const getReleaseDateText = (releaseDate: number): string => {
    const dateText = dayjs(releaseDate * 1000).format('DD-MM-YYYY');
    return `Released on ${dateText}`;
  };

  return (
    <StyledGameBannerExtraInfo {...containerProps}>
      <div className="extra-info-item">
        <CalendarIcon className="extra-info-icon" />
        <span className="extra-info-text">{getReleaseDateText(game?.first_release_date)}</span>
      </div>
      <div className="extra-info-item">
        <UserIcon className="extra-info-icon" />
        <span className="extra-info-text">{getFollowsText(game?.follows)}</span>
      </div>
    </StyledGameBannerExtraInfo>
  );
};
