import { theme } from '@nextui-org/react';
import styled from 'styled-components';

export const StyledTopGame = styled.div<{ backgroundUrl: string }>`
  width: 900px;
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
    z-index: 2;
  }

  .content {
    position: relative;
    width: 100%;
    padding: 1.5rem;
    display: flex;
    align-items: flex-start;
    column-gap: 2rem;
    z-index: 3;

    .cover {
      .cover-image {
        width: 180px;
      }
    }

    .description {
      flex: 1;

      .title {
        font-size: 1.875rem;
        font-weight: 600;
        color: ${theme.colors.white.value};
      }

      .storyline {
        color: ${theme.colors.white.value};
      }
    }
  }
`;
