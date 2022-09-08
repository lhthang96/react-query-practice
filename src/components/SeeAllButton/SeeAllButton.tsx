import React, { ComponentPropsWithoutRef } from 'react';
import ChevronRightIcon from 'src/assets/chevron_right.svg';
import { StyledSeeAllButton } from './SeeAllButton.styles';

type SeeAllButtonProps = ComponentPropsWithoutRef<'div'>;

export const SeeAllButton: React.FC<SeeAllButtonProps> = (props) => {
  return (
    <StyledSeeAllButton {...props}>
      <span className="button-text">See all</span>
      <ChevronRightIcon className="button-icon" />
    </StyledSeeAllButton>
  );
};
