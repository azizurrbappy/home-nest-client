import React from 'react';
import Container from '../Container/Container';

const AreYouALandlord = () => {
  return (
    <Container className="w-[34rem]">
      <div className="text-center space-y-5 mb-5">
        <h3 className="text-xl font-bold text-[#7065F0]">No Spam Promise</h3>
        <h2 className="text-4xl font-bold text-[#000929]">
          Are you a landlord?
        </h2>
        <p className="text-[#000929]">
          Discover ways to increase your home's value and get listed. No Spam.
        </p>
      </div>
      <div className="w-fit mx-auto">
        <form
          className="flex items-center justify-between bg-white py-3 px-5 rounded-lg"
          action=""
        >
          <input
            className="input outline-0 border-0 shadow-none w-xs dark:bg-white dark:text-black"
            type="email"
            required
            placeholder="mail@site.com"
          />
          <input
            className="py-2 px-6 rounded-md text-white font-medium bg-[#7065F0]"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </Container>
  );
};

export default AreYouALandlord;
