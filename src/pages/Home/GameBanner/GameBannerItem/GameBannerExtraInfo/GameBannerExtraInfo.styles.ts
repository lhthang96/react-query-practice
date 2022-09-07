import { THEME } from 'src/shared/theme';
import styled from 'styled-components';

export const StyledGameBannerExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  .extra-info-item {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 12px;

    .extra-info-icon {
      width: 20px;
      fill: ${THEME.TEXT_PRIMARY_INVERSE};
    }

    .extra-info-text {
      color: ${THEME.TEXT_PRIMARY_INVERSE};
    }
  }
`;
