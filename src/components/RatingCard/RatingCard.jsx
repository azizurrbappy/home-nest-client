import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { NavLink } from 'react-router';
import Ratings from '../Ratings/Ratings';

const RatingCard = ({ item }) => {
  const {
    reviewerName,
    propertyName,
    propertyImage,
    starRating,
    reviewText,
    reviewDate,
    propertyId,
  } = item;

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure
          style={{
            backgroundImage: `url('${propertyImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '200px',
            width: '100%',
          }}
        ></figure>
        <div className="card-body">
          <div>
            <h2 className="text-2xl font-extrabold text-[#7065F0]">
              {propertyName}
            </h2>
            <p>
              {reviewerName} - ({reviewDate})
            </p>
          </div>
          <NavLink
            // to={`/property/${_id}`}
            className="text-2xl font-extrabold text-[#000929] dark:text-white"
          ></NavLink>
          <Ratings rating={starRating}></Ratings>
          <p className="text-gray-500">{reviewText}</p>

          <NavLink
            to={`/property/${propertyId}`}
            className="mt-5 mx-auto text-[#000929] dark:text-white flex items-center hover:gap-2 hover:text-[#7065F0] duration-200 hover:underline"
          >
            View Details <GoArrowRight size={18} />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default RatingCard;
