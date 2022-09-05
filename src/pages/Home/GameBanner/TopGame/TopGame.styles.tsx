import { theme } from '@nextui-org/react';
import styled from 'styled-components';

export const StyledTopGame = styled.div<{ backgroundUrl: string }>`
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

    .cover {
      .cover-image {
        width: 100%;
        max-width: 180px;
      }
    }

    .description {
      text-align: left;

      .header {
        width: 100%;
        padding: 1rem 0 1.5rem;
        display: flex;
        flex-direction: column;

        .title {
          font-size: 1.875rem;
          font-weight: 600;
          color: ${theme.colors.white.value};
          margin-bottom: 0.5rem;
        }

        .extra-info {
          width: 100%;
          display: flex;
          align-items: stretch;
          column-gap: 0.5rem;

          .rating {
            color: ${theme.colors.white.value};
            align-self: center;
          }

          .extra-info-separator {
            width: 1px;
            margin: 0 20px;
            background: ${theme.colors.white.value};
          }

          .release-date {
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 8px;
            color: ${theme.colors.white.value};

            .release-date-icon {
              width: 24px;
              fill: ${theme.colors.white.value};
            }
          }

          .follow {
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 8px;
            color: ${theme.colors.white.value};
            margin-right: 20px;

            .follow-icon {
              width: 24px;
              fill: ${theme.colors.white.value};
            }
          }
        }
      }

      .separator {
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.white.value};
      }

      .summary {
        color: ${theme.colors.white.value};
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
`;
