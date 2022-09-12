import { THEME } from 'src/shared/theme';
import styled from 'styled-components';

export const StyledTopGameListByGenre = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  .top-list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .genre-name {
      color: ${THEME.TEXT_SECONDARY};
    }
  }

  .game-list {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 24px;
    overflow-x: auto;

    .game-item {
      width: 240px;
      min-width: 240px;
    }
  }
`;
