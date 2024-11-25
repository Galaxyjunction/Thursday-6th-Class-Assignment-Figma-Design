import Image from "next/image";
import pic3 from "../public/images/pic3.svg";
import pic1 from "../public/images/pic1.svg";
import pic6 from "../public/images/pic6.svg";
import {FiArrowLeft, FiArrowRight} from "react-icons/fi";

const Testimonial = () => {
  const testimonials = [
    {
      image: pic3,
      name: "Joseph Ngumbau",
      role: "Software Developer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      image: pic1,
      name: "Erick Kipkemboi",
      role: "Scrum Master",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      image: pic6,
      name: "Stephen Kerubo",
      role: "UI/UX Designer",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
  ];

  return (
    <section className="mx-auto px-4 py-16 bg-[#F7F7F7]">
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-[36px] sm:text-[48px] font-bold text-[#000000]">
          Customer Testimonials
        </h2>
        <p className="text-[16px] sm:text-[20px] text-[#000000] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((customer, index) => (
          <div
            key={index}
            className="border border-black p-6 rounded-lg bg-white shadow-md"
          >
            <div className="flex mb-4 text-[20px] sm:text-[24px] text-black">
              ★★★★★
            </div>
            <p className="text-[14px] sm:text-[16px] text-[#000000] mb-4">
              {customer.testimonial}
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={customer.image}
                alt={customer.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="text-[16px] sm:text-[18px] font-bold text-[#000000]">
                  {customer.name}
                </h3>
                <p className="text-[14px] sm:text-[16px] text-[#000000]">
                  {customer.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination and Navigation */}
      <div className="flex justify-between items-center mt-8">
        {/* Pagination Dots */}
        <div className="flex gap-2">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === 0 ? "bg-[#000000]" : "bg-[#8D8D8D]"
                }`}
              ></span>
            ))}
        </div>

<div className="flex items-center gap-4">
  {/* Back Arrow */}
  <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center">
    <FiArrowLeft className="w-6 h-6 text-black" />
  </div>
  {/* Forward Arrow */}
  <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center">
    <FiArrowRight className="w-6 h-6 text-black" />
  </div>
</div>
      </div>
    </section>
  );
};

export default Testimonial;