import { theme } from '@nextui-org/react';
import { THEME } from 'src/shared/theme';
import styled from 'styled-components';

export const StyledGameBannerItem = styled.div<{ backgroundUrl: string }>`
  width: 100%;
  position: relative;

  &::before {
    content: '';
    background-image: ${(props) => `url(${props.backgroundUrl})`};
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.75;
    z-index: 1;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 0 100px 900px rgb(0 0 0 / 45%);
    z-index: 2;
  }

  .content {
    position: relative;
    padding: 60px 32px;
    z-index: 3;

    .cover-container {
      .cover-image {
        width: 100%;
        max-width: 200px;
      }
    }

    .game-info {
      text-align: left;

      .header {
        width: 100%;
        padding: 1rem 0 1.5rem;
        display: flex;
        flex-direction: column;
        row-gap: 24px;

        .title {
          font-weight: 600;
          font-size: 40px;
          line-height: 48px;
          color: ${THEME.TEXT_PRIMARY_INVERSE};
          margin: 0;
        }

        .game-overview {
          width: 100%;
          display: flex;
          align-items: center;
          column-gap: 20px;

          .game-overview-separator {
            width: 1px;
            background: ${THEME.TEXT_PRIMARY_INVERSE};
            align-self: stretch;
          }
        }
      }

      .separator {
        width: 100%;
        height: 2px;
        background-color: ${THEME.TEXT_PRIMARY_INVERSE};
      }

      .summary {
        color: ${THEME.TEXT_PRIMARY_INVERSE};
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
`;
