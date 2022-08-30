import React, { ReactNode } from 'react';
import { StyledLayout } from './Layout.styles';
import { NavigationBar } from './NavigationBar';

type LayoutProps = {
  children?: ReactNode;
};

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <StyledLayout>
      <NavigationBar />
      {children}
    </StyledLayout>
  );
};
