import { THEME } from 'src/shared/theme';
import styled from 'styled-components';

export const StyledNewGames = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  .new-games-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .new-games-title {
      font-weight: 600;
    }
  }

  .new-game-list {
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    .new-game-item {
      &:not(:last-child) {
        padding-bottom: 12px;
        border-bottom: 1px solid ${THEME.BORDER_COLOR};
      }
    }
  }
`;
