
import React from 'react';
import Image from 'next/image';

const SecondSec: React.FC = () => {
  return (
      <div className="flex items-center justify-center lg:h-[100vh] bg-white font-roboto max-md:h-[40vh]">
        <div className="text-center items-center">
          
          <Image
            src="https://www.nikken.co.jp/en/common/images/img_logo_01.png"
            alt="logo"
            width={350}
            height={350}
            className="mx-auto my-4 w-full max-w-[150px] md:max-w-[250px] lg:max-w-[350px]"
          />
          <p className="text-xs md:text-sm lg:text-base mt-1">SINCE 1900</p>
          <p className="text-sm md:text-lg lg:text-xl text-blue-500 mt-4">
            Integrating accumulated proficiency
          </p>
          <p className="text-sm md:text-lg lg:text-xl text-blue-500">
            to deliver rich experiences
          </p>
        </div>
      </div>
  );
};

export default SecondSec;
