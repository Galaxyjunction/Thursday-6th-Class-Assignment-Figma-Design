import Image from "next/image";

type CourseCardProps = {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  rating: number;
  price: number;
};

const CourseCard = ({
  imageSrc,
  category,
  title,
  description,
  rating,
  price,
}: CourseCardProps) => {
  return (
    <div className="lg:w-[416px] w-[380px] h-auto rounded-[5px] flex flex-col bg-[#F7F7F7]">
      <Image
        src={imageSrc}
        alt={`${title} image`}
        width={416}
        height={300}
        className="w-full h-[300px] rounded-t-[5px]"
      />
      <div className="p-[16px] flex flex-col gap-[16px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[14px] font-semibold text-black">{category}</h2>
          <div className="flex items-center gap-[4px]">
            <Image src="/images/Star.svg" alt="Star" width={24} height={24} />
            <span className="text-[14px] font-semibold text-black">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
        <h3 className="text-[24px] font-bold text-black">{title}</h3>
        <p className="text-[16px] text-black">{description}</p>
        <div className="flex items-center gap-[16px]">
          <button className="w-[117px] h-[40px] border border-black rounded-[5px] text-[15px] font-medium">
            Enroll Now
          </button>
          <div className="w-[77px] h-[40px] border border-black rounded-[5px] flex items-center justify-center">
            <span className="text-[16px] font-medium">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <div className="flex flex-col items-center gap-[48px] lg:gap-[60px]">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-[28px] lg:text-[56px] font-bold">Courses</h1>
        <p className="text-[18px]">Your Ultimate Guide to Learning</p>
      </div>

      {/* Filter Section */}
      <div className="flex gap-[8px] border-b pb-[8px]">
        <button className="text-[16px] text-black border-b-[2px] border-black">
          Popular
        </button>
        <button className="text-[16px] text-black border-b-[2px] border-transparent">
          Recommended
        </button>
        <button className="text-[16px] text-black border-b-[2px] border-transparent">
          Best Price
        </button>
      </div>

      {/* Courses Section for Desktop */}
      <div className="hidden lg:flex flex-wrap justify-center gap-[32px]">
        <CourseCard
          imageSrc="/images/image1.svg"
          category="Design"
          title="UX/UI Design 201"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          rating={5.0}
          price={400}
        />
        <CourseCard
          imageSrc="/images/image2.svg"
          category="Programming"
          title="Introduction to Python"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          rating={5.0}
          price={400}
        />
        <CourseCard
          imageSrc="/images/image3.svg"
          category="Business"
          title="Data Analysis for Beginners"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          rating={5.0}
          price={400}
        />
        <CourseCard
          imageSrc="/images/image4.svg"
          category="Art"
          title="Art Specialization"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          rating={5.0}
          price={400}
        />
        <CourseCard
          imageSrc="/images/image5.svg"
          category="Law"
          title="Rule of Law"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          rating={5.0}
          price={350}
        />
        <CourseCard
          imageSrc="/images/image6.svg"
          category="Tech"
          title="Introduction to Webflow"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          rating={5.0}
          price={400}
        />
      </div>

      {/* Courses Section for Mobile */}
      <div className="flex lg:hidden flex-wrap justify-center gap-[32px]">
        <CourseCard
          imageSrc="/images/image1.svg"
          category="Design"
          title="UX/UI Design 201"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          rating={5.0}
          price={400}
        />
        <CourseCard
          imageSrc="/images/image2.svg"
          category="Programming"
          title="Introduction to Python"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          rating={5.0}
          price={400}
        />
        <CourseCard
          imageSrc="/images/image3.svg"
          category="Business"
          title="Data Analysis for Beginners"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          rating={5.0}
          price={400}
        />
      </div>

      {/* Button Section */}
      <button className="w-[200px] h-[50px] bg-white text-black rounded-[5px] mt-[20px] border border-black">
        View All Courses
      </button>
    </div>
  );
};

export default Courses;
