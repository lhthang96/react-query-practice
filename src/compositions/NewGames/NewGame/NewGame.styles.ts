import { THEME } from 'src/shared/theme';
import styled from 'styled-components';

export const StyledNewGame = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;

  .thumbnail {
    .thumbnail-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  .game-info {
    flex: 1;
    display: flex;
    align-items: center;
    column-gap: 12px;
    justify-content: space-between;

    .game-overview {
      flex: 1;
      display: flex;
      flex-direction: column;
      row-gap: 0;

      .game-name {
        font-weight: 600;
        font-size: 13px;
        color: ${THEME.TEXT_PRIMARY};
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      .game-genres {
        font-size: 12px;
        color: ${THEME.TEXT_SECONDARY};
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    .game-release-date {
      .game-release-date-text {
        font-size: 13px;
        color: ${THEME.TEXT_SECONDARY};
      }
    }
  }
`;
