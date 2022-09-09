import React, { ReactNode, useState } from 'react';
import { StyledAppContentContainer, StyledLayout, StyledNavbarContainer } from './Layout.styles';
import { NavigationBar } from './NavigationBar';

type LayoutProps = {
  children?: ReactNode;
};

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <StyledLayout>
      <StyledNavbarContainer ref={(container) => setNavbarHeight(container?.clientHeight)}>
        <NavigationBar />
      </StyledNavbarContainer>
      <StyledAppContentContainer navbarHeight={navbarHeight}>{children}</StyledAppContentContainer>
    </StyledLayout>
  );
};
