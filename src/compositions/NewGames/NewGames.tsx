import React, { ComponentPropsWithoutRef, ReactElement } from 'react';
import { SeeAllButton } from 'src/components';
import { useQueryGame } from 'src/hooks';
import { NewGame } from './NewGame/NewGame';
import { StyledNewGames } from './NewGames.styles';

type NewGamesProps = ComponentPropsWithoutRef<'div'>;

export const NewGames: React.FC<NewGamesProps> = (props) => {
  const { data: games } = useQueryGame({
    scope: 'default',
    sorters: [['first_release_date', 'desc']]
  });

  const renderGames = (): ReactElement[] => {
    return (games || []).map((game) => <NewGame key={game.id} game={game} className="new-game-item" />);
  };

  return (
    <StyledNewGames {...props}>
      <div className="new-games-header">
        <p className="new-games-title">Recently released</p>
        <SeeAllButton />
      </div>
      <div className="new-game-list">{renderGames()}</div>
    </StyledNewGames>
  );
};
