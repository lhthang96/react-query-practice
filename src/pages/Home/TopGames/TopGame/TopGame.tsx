import { Grid, Image } from '@nextui-org/react';
import React, { ComponentPropsWithoutRef, useMemo } from 'react';
import Rating from 'react-stars';
import { IGDBClient } from 'src/services';
import { Game } from 'src/shared/interfaces';
import StarFullIcon from 'src/assets/star-full.svg';
import StarEmptyIcon from 'src/assets/star-empty.svg';
import { StyledTopGame } from './TopGame.styles';

type TopGameProps = ComponentPropsWithoutRef<'div'> & {
  game: Game;
};

export const TopGame: React.FC<TopGameProps> = (props) => {
  const { game, ...containerProps } = props;
  const coverURL = useMemo(() => game && IGDBClient.instance.getImageURL(game?.cover?.image_id, 'cover_big'), [game]);
  const backgroundURL = useMemo(
    () => game && IGDBClient.instance.getImageURL(game?.screenshots?.[0]?.image_id, 'screenshot_huge'),
    [game]
  );

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
                <Rating count={10} value={Math.round((game?.total_rating * 10) / 100)} edit={false} />
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
