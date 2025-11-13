import React from 'react';

const Ratings = ({ rating }) => {
  return (
    <div className="rating">
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        aria-label="1 star"
        disabled
        checked={rating === 1 || false}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        aria-label="2 star"
        disabled
        checked={rating === 2 || false}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        aria-label="3 star"
        disabled
        checked={rating === 3 || false}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        aria-label="4 star"
        disabled
        checked={rating === 4 || false}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        aria-label="5 star"
        disabled
        checked={rating === 5 || false}
      />
    </div>
  );
};

export default Ratings;
