
import React from 'react';
import Image from 'next/image';

export default function SecondSec() {
  return (
      <div className="flex items-center justify-center lg:h-[100vh] bg-white font-roboto max-md:h-[40vh] mb-10">
        <div className="text-center items-center">
          
          <Image
            src="/Atom2.jpg"
            alt="logo"
            width={350}
            height={350}
            className="mx-auto my-4 w-full max-w-[150px] md:max-w-[250px] lg:max-w-[350px]"
          />
          <p className="text-xs md:text-sm lg:text-base mt-1">SINCE 2000</p>
          <p className="text-sm md:text-lg lg:text-xl text-blue-500 mt-4">
            Start with the 
          </p>
          <p className="text-sm md:text-lg lg:text-xl text-blue-500">
            end in mind
          </p>
        </div>
      </div>
  );
};