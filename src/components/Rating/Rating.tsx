import React, { ComponentPropsWithoutRef, ReactElement } from 'react';
import StarFilled from 'src/assets/star_filled.svg';
import StarHalfFilled from 'src/assets/star_half_filled.svg';
import StarEmpty from 'src/assets/star_empty.svg';
import { StyledRating } from './Rating.styles';

type RatingProps = ComponentPropsWithoutRef<'div'> & {
  /**
   * From 1 to 10
   */
  value?: number;

  /**
   * Class name of star icon
   */
  iconClassName?: string;
};

export const Rating: React.FC<RatingProps> = (props) => {
  const { value, iconClassName } = props;

  const [filled, halfFilled, empty] = calculateStars(value);

  const renderStars = (quantity: number, type: 'filled' | 'half-filled' | 'empty'): ReactElement[] => {
    if (typeof quantity !== 'number' || quantity <= 0) return null;
    const Star = type === 'filled' ? StarFilled : type === 'half-filled' ? StarHalfFilled : StarEmpty;
    const starClassName = `rating-star rating-star-${type}`;
    const className = iconClassName ? `${starClassName} ${iconClassName}` : starClassName;
    return [...Array(quantity)].map((_, index) => {
      return <Star key={`star-${type}-${index}`} className={className} />;
    });
  };

  return (
    <StyledRating>
      {renderStars(filled, 'filled')}
      {renderStars(halfFilled, 'half-filled')}
      {renderStars(empty, 'empty')}
    </StyledRating>
  );
};

/**
 * @return [number of filled stars, number of half filled stars, number of empty stars]
 */
const calculateStars = (rating: number): [number, number, number] => {
  if (typeof rating !== 'number' || rating < 0) return [0, 0, 10];
  if (rating > 10) return [10, 0, 0];

  const difference = rating - Math.floor(rating);
  if (difference < 0.25) return [Math.floor(rating), 0, 10 - Math.floor(rating)];
  if (difference > 0.75) return [Math.floor(rating) + 1, 0, 10 - Math.floor(rating) - 1];
  return [Math.floor(rating), 1, 10 - Math.floor(rating) - 1];
};
