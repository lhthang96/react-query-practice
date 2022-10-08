import { THEME } from 'src/shared/theme';
import styled from 'styled-components';

export const StyledAppErrorFallback = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;

  .error-content {
    margin-top: 100px;

    .error-title {
      font-size: 64px;
      line-height: 80px;
      color: ${THEME.TEXT_PRIMARY};
    }

    .error-message {
      font-size: 24px;
      color: ${THEME.TEXT_SECONDARY};
    }
  }
`;
