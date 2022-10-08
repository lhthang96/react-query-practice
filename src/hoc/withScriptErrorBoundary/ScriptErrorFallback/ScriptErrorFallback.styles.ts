import { THEME } from 'src/shared/theme';
import styled from 'styled-components';

export const StyledScriptErrorFallback = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  column-gap: 12px;

  .crash-icon {
    width: 64px;
    fill: ${THEME.TEXT_SECONDARY};
  }

  .error-message {
    font-size: 24px;
    color: ${THEME.TEXT_SECONDARY};
  }
`;
