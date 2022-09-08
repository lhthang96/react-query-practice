import { IGDB_IMG_RATIO } from 'src/shared/constants';
import { THEME } from 'src/shared/theme';
import styled from 'styled-components';

const SCREENSHOT_MED_RATIO = IGDB_IMG_RATIO.screenshot_med;
const SCREENSHOT_WIDTH = 240;

export const StyledComingSoonGame = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  .coming-soon-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .coming-soon-title {
      font-weight: 600;
    }
  }

  .coming-soon-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    .game-screenshot {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .game-screenshot-image {
        width: ${SCREENSHOT_WIDTH}px;
        height: ${SCREENSHOT_WIDTH / SCREENSHOT_MED_RATIO}px;
        border-radius: 12px;
        overflow: hidden;
      }
    }

    .game-info {
      display: flex;
      flex-direction: column;
      row-gap: 12px;

      .game-info-overview {
        display: flex;
        align-items: center;
        column-gap: 12px;
        padding-bottom: 10px;
        border-bottom: 1px solid ${THEME.BORDER_COLOR};

        .game-overview {
          flex: 1;
          display: flex;
          flex-direction: column;
          row-gap: 4px;
          .game-name {
            font-weight: 600;
            font-size: 13px;
            color: ${THEME.TEXT_PRIMARY};
          }
          .game-genres {
            font-size: 12px;
            color: ${THEME.TEXT_SECONDARY};
          }
        }
      }

      .game-summary {
        .game-summary-text {
          color: ${THEME.TEXT_SECONDARY};
          font-size: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
`;
