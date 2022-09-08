import React, { ComponentPropsWithoutRef } from 'react';
import { ComingSoonGame } from 'src/compositions';
import { StyledHomeSidebar } from './HomeSidebar.styles';

type HomeSidebarProps = ComponentPropsWithoutRef<'div'>;

export const HomeSidebar: React.FC<HomeSidebarProps> = (props) => {
  return (
    <StyledHomeSidebar {...props}>
      <ComingSoonGame />
    </StyledHomeSidebar>
  );
};
