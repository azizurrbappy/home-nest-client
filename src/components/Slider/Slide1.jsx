import React from 'react';

const Slide1 = () => {
  return (
    <div
      className={`bg-[url('https://surli.cc/xhkflt')] h-[calc(100vh-10vh)] bg-cover bg-center`}
    >
      <div className="bg-gradient-to-tr from-black to-transparent h-full px-20 flex flex-col justify-center">
        <div className="lg:w-120 w-full">
          <h1 className="lg:text-6xl text-5xl font-bold text-white">
            Beautiful homes made for you
          </h1>
          <p className="text-lg mt-5 text-gray-300">
            Every detail thoughtfully considered to create{' '}
            <br className="max-sm:hidden" /> spaces where memories flourish and
            comfort <br className="max-sm:hidden" /> comes naturally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
