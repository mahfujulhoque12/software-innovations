// components/ServiceHero.jsx
import React from 'react';

const ServiceHero = () => {
  return (
    <section>
      <div className="w-full relative">
        {/* Background Image */}
        <div
          className="
            relative
            h-[400px]
            md:h-[500px]
            bg-[url('/services/services.jpg')]
            bg-cover
            bg-center
            bg-no-repeat
          "
        >
          {/* Dark Overlay & Text */}
          <div className="absolute inset-0 bg-black/75 flex flex-col justify-center items-center">
            <h2 className="font-bold text-xl md:text-4xl text-[#FAA61A] uppercase text-center">
              Our Core Services
            </h2>
            <div className="h-0.5 bg-[#FAA61A] w-24 mt-2" />
            <p className="mt-4 text-gray-100 font-semibold text-xl text-center px-4">
              Let&rsquo;s Make Your Dream Big and Bigger
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
