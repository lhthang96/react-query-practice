import { IGDB_IMG_RATIO } from 'src/shared/constants';
import { THEME } from 'src/shared/theme';
import styled from 'styled-components';

const STAR_COLOR = '#F1C644';
const COVER_RATIO = IGDB_IMG_RATIO.cover_big;

export const StyledTopGameByGenreItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid ${THEME.BORDER_COLOR};
  overflow: hidden;

  .game-cover {
    width: 100%;
  }

  .game-info {
    display: flex;
    align-items: center;
    column-gap: 12px;
    padding: 12px 8px;
    background-color: ${THEME.BG_SECONDARY};

    .game-overview {
      display: flex;
      flex-direction: column;
      flex: 1;

      .game-name {
        font-size: 14px;
        font-weight: 600;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .game-themes {
        font-size: 12px;
        color: ${THEME.TEXT_SECONDARY};

        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    .game-rating {
      display: flex;
      align-items: center;
      column-gap: 4px;

      .game-rating-icon {
        fill: ${STAR_COLOR};
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const StyledCoverImage = styled.div<{ url: string }>`
  width: 100%;
  aspect-ratio: ${COVER_RATIO};
  background-image: ${(props): string => `url(${props.url})`};
  background-repeat: no-repeat;
  object-fit: scale-down;
  background-size: cover;
`;
