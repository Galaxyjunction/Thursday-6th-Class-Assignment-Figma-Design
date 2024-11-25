import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center bg-white">
      {/* Left Content */}
      <div className="w-full flex flex-col items-center md:items-start text-center md:text-left gap-6 px-6 md:px-12 py-8 md:py-12">
        <h1 className="font-bold text-[28px] md:text-[40px] lg:text-[56px] leading-[34px] md:leading-[50px] lg:leading-[67px] max-w-[500px]">
          Learn new skills online with ease
        </h1>
        <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] max-w-[500px]">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
        <div className="flex gap-4">
          <button className="rounded-md border border-black py-3 px-6 text-[16px] bg-black text-white hover:bg-gray-800 transition">
            Start Learning Now
          </button>
          <button className="rounded-md border border-black py-3 px-6 text-[16px] hover:bg-gray-200 transition">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src="/images/Image.svg"
          alt="Hero Image"
          width={480} // Reduced width
          height={600} // Reduced height (proportional to original)
          className="w-full h-auto max-w-[400px] md:max-w-[600px] lg:max-w-[720px]"
        />
      </div>
    </div>
  );
}

export default Hero;




