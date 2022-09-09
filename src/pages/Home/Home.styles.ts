import { Grid } from '@nextui-org/react';
import { THEME } from 'src/shared/theme';
import styled from 'styled-components';

export const StyledHome = styled(Grid.Container)`
  width: 100%;
  height: 100%;

  .home-content {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 32px 40px;
    border-right: 1px solid ${THEME.BORDER_COLOR};
  }

  .home-right-container {
    height: 100%;
  }
`;
