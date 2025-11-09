import React from 'react';
import Container from '../Container/Container';
// import House from '../../assets/home-2.jpg';
import { Link } from 'react-router';
import { MdKeyboardArrowRight, MdVideoLibrary } from 'react-icons/md';

const TenantsAndLandlords = () => {
  return (
    <Container className="w-fit mx-auto mt-24 mb-16 px-4 lg:px-0 flex items-center justify-between lg:gap-32 gap-20 flex-col lg:flex-row">
      <div>
        <img
          className="w-[34rem] h-[37.5rem] rounded-md"
          src="https://images.unsplash.com/photo-1673147056688-4df20283643b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688"
        />
      </div>
      <div className="sm:w-111">
        <h3 className="text-[#000929] text-4xl font-bold mb-5">
          We make it easy for tenants and landlords.
        </h3>
        <p className="text-[#000929] mb-5">
          Whether it’s selling your current home, getting financing, or buying a
          new home, we make it easy and efficient. The best part? you’ll save a
          bunch of money and time with our services.
        </p>
        <Link className="flex items-center bg-[#7065F0] w-fit py-2 px-4 rounded-md font-medium text-white ">
          See More <MdKeyboardArrowRight />
        </Link>
      </div>
    </Container>
  );
};

export default TenantsAndLandlords;
