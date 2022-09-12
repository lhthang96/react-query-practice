import { Grid } from '@nextui-org/react';
import { THEME } from 'src/shared/theme';
import styled from 'styled-components';

export const StyledHome = styled(Grid.Container)`
  width: 100%;
  height: 100%;

  .home-content {
    display: block;
    height: 100%;
    overflow-y: auto;
    padding: 32px 40px;
    border-right: 1px solid ${THEME.BORDER_COLOR};

    .game-banner {
      margin-bottom: 40px;
    }

    .top-game-list-by-genre {
      margin-bottom: 32px;
    }
  }

  .home-right-container {
    width: 25%;
    height: 100%;
  }
`;
