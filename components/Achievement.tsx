import React from "react";

const Achievement = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-[28px] sm:text-[32px] lg:text-[38px] font-bold text-black">
          Our Achievements
        </h2>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-700 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros 
          elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo 
          diam libero vitae erat.
        </p>
      </div>

      {/* Achievement Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
        <div className="flex flex-col items-center">
          <span className="text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-black">+200</span>
          <span className="text-[14px] sm:text-[16px] text-gray-600 mt-2">Courses</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-black">5K</span>
          <span className="text-[14px] sm:text-[16px] text-gray-600 mt-2">Mentors</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-black">370K</span>
          <span className="text-[14px] sm:text-[16px] text-gray-600 mt-2">Students</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-black">100+</span>
          <span className="text-[14px] sm:text-[16px] text-gray-600 mt-2">Recognition</span>
        </div>
      </div>
    </section>
  );
};

export default Achievement; 