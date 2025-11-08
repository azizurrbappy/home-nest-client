import React from 'react';

const Slide2 = () => {
  return (
    <div
      className={`bg-[url('https://surl.li/uopmao')] h-[calc(100vh-10vh)] bg-cover bg-center`}
    >
      <div className="bg-gradient-to-tr from-black to-transparent h-full px-20 flex flex-col justify-center">
        <div className="lg:w-120 w-full">
          <h1 className="lg:text-6xl text-5xl font-bold text-white">
            Crafted spaces, designed for living
          </h1>
          <p className="text-lg mt-5 text-gray-300">
            We transform your vision into reality, building
            <br className="max-sm:hidden" /> homes that reflect your unique
            style and embrace <br className="max-sm:hidden" /> your lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
