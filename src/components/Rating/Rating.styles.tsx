import styled from 'styled-components';

const STAR_COLOR = '#F1C644';

export const StyledRating = styled.div`
  display: flex;
  align-items: center;

  .rating-star {
    width: 20px;
    height: 20px;
    fill: ${STAR_COLOR};
  }
`;
