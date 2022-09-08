import { Button, Image } from '@nextui-org/react';
import React, { ComponentPropsWithoutRef } from 'react';
import { useQuery } from 'react-query';
import { SeeAllButton } from 'src/components';
import { useQueryGame } from 'src/hooks';
import { IGDBClient } from 'src/services';
import { GameGenre } from 'src/shared/interfaces';
import { StyledHomeSidebar } from './HomeSidebar.styles';

const CURRENT_TIME = new Date().getTime() / 1000;
const NEXT_MONTH_TIME = (new Date().getTime() + 28 * 24 * 60 * 60 * 1000) / 1000;

type HomeSidebarProps = ComponentPropsWithoutRef<'div'>;

export const HomeSidebar: React.FC<HomeSidebarProps> = (props) => {
  const { data: upcomingGames } = useQueryGame({
    scope: 'default',
    filters: [
      ['first_release_date', '>', CURRENT_TIME],
      ['first_release_date', '<', NEXT_MONTH_TIME]
    ],
    sorters: [['first_release_date', 'asc']],
    pagination: { limit: 1, offset: 0 }
  });

  const upcomingGame = upcomingGames?.[0];
  const { name, summary, genres = [], cover } = upcomingGame || {};
  const coverImg = IGDBClient.instance.getImageURL(cover?.image_id, 'screenshot_med');
  const genreNames = genres.map((genre) => genre.name).join(', ');

  return (
    <StyledHomeSidebar {...props}>
      <div className="coming-soon">
        <div className="coming-soon-header">
          <p className="coming-soon-title">Coming soon</p>
          <SeeAllButton />
        </div>
        <div className="coming-soon-body">
          <div className="game-screenshot">
            <Image src={coverImg} className="game-screenshot-image" />
          </div>
          <div className="game-info">
            <div className="game-info-overview">
              <div className="game-overview">
                <span className="game-name">{name}</span>
                <span className="game-genres">{genreNames}</span>
              </div>
              <Button size="xs" auto color="primary">
                Follow
              </Button>
            </div>
            <div className="game-summary">
              <span className="game-summary-text">{summary}</span>
            </div>
          </div>
        </div>
      </div>
    </StyledHomeSidebar>
  );
};
