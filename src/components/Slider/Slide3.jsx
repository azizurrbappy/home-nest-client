import React from 'react';

const Slide3 = () => {
  return (
    <div
      className={`bg-[url('https://surl.li/trfkvk')] h-[calc(100vh-10vh)] bg-cover bg-center`}
    >
      <div className="bg-gradient-to-tr from-black to-transparent h-full px-20 flex flex-col justify-center">
        <div className="lg:w-120 w-full">
          <h1 className="lg:text-6xl text-5xl font-bold text-white">
            Your dream home, beautifully realized
          </h1>
          <p className="text-lg mt-5 text-gray-300">
            We don't just build houses—we create
            <br className="max-sm:hidden" /> beautiful homes tailored to your
            family's
            <br className="max-sm:hidden" /> needs and dreams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
