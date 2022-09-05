import { Button, Input, Navbar } from '@nextui-org/react';
import { THEME } from 'src/shared/theme';
import styled from 'styled-components';

export const StyledNavigationBar = styled(Navbar)`
  &.nextui-navbar {
    box-shadow: none;
    border-bottom: 1px solid ${THEME.BORDER_COLOR};

    .nextui-navbar-container {
      max-width: 100%;
      padding: 0 40px;
    }
  }
`;

export const StyledSearchInput = styled(Input)`
  &.nextui-input-container {
    .nextui-input-content.nextui-input-content--right {
      .search-icon {
        width: 14px;
        height: 14px;
        color: ${THEME.TEXT_SECONDARY};
        margin-right: 8px;
      }
    }
  }
`;

export const StyledFavoriteButton = styled(Button)`
  &.nextui-button {
    .nextui-button-icon {
      .favorite-icon {
        width: 16px;
        color: ${THEME.TEXT_PRIMARY_INVERSE};
      }
    }
  }
`;
