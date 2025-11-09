import React from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router';
import House from '../../assets/illustration.png';
import { TbHomeCheck } from 'react-icons/tb';
import { CiBadgeDollar } from 'react-icons/ci';
import { FaHandHoldingDollar } from 'react-icons/fa6';

const WhyChooseUs = () => {
  return (
    <Container className="flex items-center justify-between gap-20 w-fit mx-auto lg:px-0 px-4 lg:flex-row flex-col">
      <div className="pl-10 pt-10 bg-[#F7F7FD] border-2 border-[#E0DEF7] rounded-md w-fit">
        <div className="">
          <p className="dark:text-[#000929]">Why Choose Us</p>
          <h3 className="text-3xl font-bold text-[#000929] mb-5">
            The new way to find <br /> your new home
          </h3>
          <p className="mb-5 dark:text-[#000929]">
            Find your dream place to live in with <br /> more than 10k+
            properties listed.
          </p>
          <Link
            to="all-properties"
            className="py-2 px-4 bg-[#100A55] text-white rounded-lg"
          >
            Browse Properties
          </Link>
        </div>
        <img src={House} alt="" />
      </div>

      <div className="flex-1 grid xl:grid-cols-2 grid-cols-1 gap-20">
        <div>
          <h3 className="flex items-center gap-2 mb-5">
            <TbHomeCheck color="#7065F0" size={28} />{' '}
            <span className="text-[#000929] text-xl font-bold dark:text-white">
              Property Insurance
            </span>
          </h3>
          <p className="w-[308px]">
            We offer our customer property protection of liability coverage and
            insurance for their better life.
          </p>
        </div>
        <div>
          <h3 className="flex items-center gap-2 mb-5">
            <FaHandHoldingDollar color="#7065F0" size={28} />{' '}
            <span className="text-[#000929] text-xl font-bold dark:text-white">
              Best Price
            </span>
          </h3>
          <p className="w-[308px]">
            Not sure what you should be charging for your property? No need to
            worry, let us do the numbers for you.
          </p>
        </div>
        <div>
          <h3 className="flex items-center gap-2 mb-5">
            <CiBadgeDollar color="#7065F0" size={28} />{' '}
            <span className="text-[#000929] text-xl font-bold dark:text-white">
              Lowest Commission
            </span>
          </h3>
          <p className="w-[308px]">
            You no longer have to negotiate commissions and haggle with other
            agents it only cost 2%!
          </p>
        </div>
        <div>
          <h3 className="flex items-center gap-2 mb-5">
            <TbHomeCheck color="#7065F0" size={28} />{' '}
            <span className="text-[#000929] text-xl font-bold dark:text-white">
              Overall Control
            </span>
          </h3>
          <p className="w-[308px]">
            Get a virtual tour, and schedule visits before you rent or buy any
            properties. You get overall control.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
