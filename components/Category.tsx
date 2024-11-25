import React from "react";
import Image from "next/image";
import frame1 from "../public/images/Frame1.svg";
import frame2 from "../public/images/Frame2.svg";
import frame3 from "../public/images/Frame3.svg";
import frame4 from "../public/images/Frame4.svg";
import frame5 from "../public/images/Frame5.svg";
import frame6 from "../public/images/Frame6.svg";
import frame7 from "../public/images/Frame7.svg";
import frame8 from "../public/images/Frame8.svg";
import frame9 from "../public/images/Frame9.svg";

const categories = [
  { image: frame1, title: "Design & Development", description: "50+ Courses Available" },
  { image: frame2, title: "Marketing", description: "50+ Courses Available" },
  { image: frame3, title: "Development", description: "50+ Courses Available" },
  { image: frame4, title: "Communication", description: "50+ Courses Available" },
  { image: frame5, title: "Digital Marketing", description: "50+ Courses Available" },
  { image: frame6, title: "Self Development", description: "50+ Courses Available" },
  { image: frame7, title: "Business", description: "50+ Courses Available" },
  { image: frame8, title: "Finance", description: "50+ Courses Available" },
  { image: frame9, title: "Consulting", description: "50+ Courses Available" },
];

const CourseCategory = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-black">
          Explore Courses By Category
        </h2>
        <p className="text-[16px] md:text-[18px] text-gray-600 mt-4">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      {/* Course Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center gap-6 p-6 bg-gray-100 rounded-lg transition-all hover:shadow-lg"
          >
            {/* Image Section */}
            <div className="category-image flex-shrink-0">
              <Image
                src={category.image}
                alt={`Category image for ${category.title}`}
                width={80}
                height={80}
                className="rounded-md"
              />
            </div>

            {/* Text Section */}
            <div className="category-text">
              <h3 className="text-[18px] lg:text-[20px] font-semibold text-gray-900">
                {category.title}
              </h3>
              <p className="text-gray-600 mt-1">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 text-black bg-white rounded-md transition hover:bg-gray-800 border-2 border-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default CourseCategory;