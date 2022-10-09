import { Input, Navbar, NavbarProps } from '@nextui-org/react';
import React from 'react';
import IconHeart from 'src/assets/icon_heart.svg';
import IconSearch from 'src/assets/icon_search.svg';
import IGDBLogo from 'src/assets/logo_desktop.svg';
import { StyledFavoriteButton, StyledNavigationBar, StyledSearchInput } from './NavigationBar.styles';

type NavigationBarProps = NavbarProps;

export const NavigationBar: React.FC<NavigationBarProps> = (props) => {
  return (
    <StyledNavigationBar {...props}>
      <Navbar.Brand>
        <IGDBLogo height={72} />
      </Navbar.Brand>
      <Navbar.Content gap={'16px'}>
        <Navbar.Item>
          <StyledSearchInput
            aria-label="Search input"
            placeholder="Search"
            contentRightStyling={false}
            contentRight={<IconSearch className="search-icon" />}
          />
        </Navbar.Item>
        <Navbar.Item>
          <StyledFavoriteButton auto icon={<IconHeart className="favorite-icon" />}>
            Favorite
          </StyledFavoriteButton>
        </Navbar.Item>
      </Navbar.Content>
    </StyledNavigationBar>
  );
};
