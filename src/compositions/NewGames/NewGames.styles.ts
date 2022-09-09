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
      display: flex;
      align-items: center;
      column-gap: 16px;

      &:not(:last-child) {
        padding-bottom: 12px;
        border-bottom: 1px solid ${THEME.BORDER_COLOR};
      }

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
    }
  }
`;
