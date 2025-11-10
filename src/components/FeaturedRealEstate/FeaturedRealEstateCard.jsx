import React, { useState } from 'react';
import { BiBath } from 'react-icons/bi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { GoArrowRight } from 'react-icons/go';
import { MdBed } from 'react-icons/md';
import { SlSizeFullscreen } from 'react-icons/sl';
import { Link, NavLink } from 'react-router';

const FeaturedRealEstateCard = ({ data }) => {
  const [isFav, setIsFav] = useState(false);

  const {
    propertyImage,
    propertyPrice,
    propertyName,
    shortDescription,
    location,
    beds,
    bathroom,
    flatSize,
    _id,
  } = data;

  const addEllipsisAfterWords = (text, wordCount = 3) => {
    const words = text.split(' ');

    if (words.length <= wordCount) {
      return text;
    }

    const limitedWords = words.slice(0, wordCount);
    return limitedWords.join(' ') + '...';
  };

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
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-[#7065F0]">
              ${propertyPrice}
              <span className="text-gray-500 text-base font-medium">
                /month
              </span>
            </h2>

            <span
              onClick={() => setIsFav(!isFav)}
              className="p-3 border border-[#E8E6F9] rounded-full cursor-pointer"
            >
              {isFav ? (
                <FaHeart size={18} color="#7065F0" />
              ) : (
                <FaRegHeart size={18} color="#7065F0" />
              )}
            </span>
          </div>
          <NavLink
            to={`/property/${_id}`}
            className="text-2xl font-extrabold text-[#000929] dark:text-white"
          >
            {addEllipsisAfterWords(propertyName, 3)}
          </NavLink>
          <p className="text-gray-500">
            {addEllipsisAfterWords(shortDescription, 10)}
          </p>
          <p className="text-gray-500 flex items-center gap-2">
            <FiMapPin /> {location}
          </p>
          <hr className="my-4 text-gray-200" />
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <MdBed color="#7065F0" size={20} /> {beds} Beds
            </span>
            <span className="flex items-center gap-2">
              <BiBath color="#7065F0" size={20} /> {bathroom} Bathrooms
            </span>
            <span className="flex items-center gap-2">
              <SlSizeFullscreen color="#7065F0" size={17} /> {flatSize}
            </span>
          </div>
          <NavLink
            to={`/property/${_id}`}
            className="mt-5 mx-auto text-[#000929] dark:text-white flex items-center hover:gap-2 hover:text-[#7065F0] duration-200 hover:underline"
          >
            View Details <GoArrowRight size={18} />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default FeaturedRealEstateCard;
