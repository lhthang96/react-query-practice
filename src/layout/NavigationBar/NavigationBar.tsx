import { Button, Navbar } from '@nextui-org/react';
import React from 'react';
import IconHeart from 'src/assets/icon_heart.svg';
import IconSearch from 'src/assets/icon_search.svg';
import IGDBLogo from 'src/assets/logo_desktop.svg';
import { StyledFavoriteButton, StyledNavigationBar, StyledSearchInput } from './NavigationBar.styles';

export const NavigationBar: React.FC = () => {
  return (
    <StyledNavigationBar>
      <Navbar.Brand>
        <IGDBLogo height={72} />
      </Navbar.Brand>
      <Navbar.Content gap={'16px'}>
        <Navbar.Item>
          <StyledSearchInput
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
