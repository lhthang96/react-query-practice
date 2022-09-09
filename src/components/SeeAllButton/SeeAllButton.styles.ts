import { THEME } from 'src/shared/theme';
import styled from 'styled-components';

export const StyledSeeAllButton = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  padding: 4px 0;
  cursor: pointer;

  &:hover {
    .button-text {
      text-decoration: underline;
    }
  }

  .button-text {
    color: ${THEME.PRIMARY};
    font-size: 14px;
    line-height: 22px;
  }

  .button-icon {
    fill: ${THEME.PRIMARY};
    width: 12px;
    height: 12px;
  }
`;
