import styled from 'styled-components';

export const StyledLayout = styled.div`
  max-width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .content {
  }
`;

export const StyledNavbarContainer = styled.div``;

export const StyledAppContentContainer = styled.main<{ navbarHeight: number }>`
  height: ${(props): string => `calc(100% - ${props.navbarHeight}px)`};
`;
