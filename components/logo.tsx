import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between bg-white lg:bg-[#F7F7F7] px-6 py-8 lg:py-12 w-full">
      {/* Text Section */}
      <div className="text-left lg:w-1/3 w-full mb-6 lg:mb-0">
        <h1 className="text-[18px] lg:text-[24px]">
          Trusted by the world&apos;s best companies worldwide
        </h1>
        {/*Mobile only text*/}
        <h1 className="text-gray-500 block lg:hidden mt-2">
          [social proof to build credibility]
        </h1>
      </div>

      {/* Logo Section */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-items-center lg:w-2/3 w-full">
        <Image
          src="/images/Logo(1).svg"
          alt="Google"
          width={123.8}
          height={38.52}
          className="w-auto h-auto"
        />
        <Image
          src="/images/Logo(2).svg"
          alt="Microsoft"
          width={123.8}
          height={38.52}
          className="w-auto h-auto"
        />
        <Image
          src="/images/Logo(3).svg"
          alt="Apple"
          width={123.8}
          height={38.52}
          className="w-auto h-auto"
        />
        <Image
          src="/images/Logo(4).svg"
          alt="Amazon"
          width={123.8}
          height={38.52}
          className="w-auto h-auto"
        />
        <Image
          src="/images/Logo(5).svg"
          alt="Facebook"
          width={123.8}
          height={38.52}
          className="w-auto h-auto"
        />
        <Image
          src="/images/Logo(6).svg"
          alt="Facebook"
          width={123.8}
          height={38.52}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Logo;