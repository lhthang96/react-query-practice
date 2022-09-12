import React, { ComponentPropsWithoutRef, ReactElement } from 'react';
import { useQueryGame } from 'src/hooks';
import { StyledTopGameListByGenre } from './TopGameListByGenre.styles';
import { TopGameByGenreItem } from './TopGameByGenreItem';
import { SeeAllButton } from 'src/components';

type TopGameListByGenreProps = ComponentPropsWithoutRef<'div'> & {
  genreId: number;
  genreName: string;
};

export const TopGameListByGenre: React.FC<TopGameListByGenreProps> = (props) => {
  const { genreId, genreName, ...containerProps } = props;

  const { data: topGames } = useQueryGame({
    scope: 'full',
    sorters: [['total_rating', 'desc']],
    filters: [
      ['total_rating', '!=', 'null'],
      ['genres', '=', genreId]
    ],
    pagination: { limit: 10, offset: 0 }
  });

  const renderGames = (): ReactElement[] => {
    return (topGames || []).map((game) => <TopGameByGenreItem key={game.id} game={game} className="game-item" />);
  };

  return (
    <StyledTopGameListByGenre {...containerProps}>
      <div className="top-list-header">
        <h3 className="genre-name">{genreName}</h3>
        <SeeAllButton />
      </div>
      <div className="game-list">{renderGames()}</div>
    </StyledTopGameListByGenre>
  );
};
