import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

// components/Hero.jsx
const Hero = () => {
  return (
    <section>
      <div className="w-full relative">
        <div
          className="
            relative
            h-[400px]
            md:h-[600px]
            bg-[url('/hero/hero.jpg')]
            bg-cover
            bg-center
            bg-no-repeat
          "
        >
          <div className="absolute inset-0 bg-[#eff3f8]/65 flex flex-col justify-center items-center">
            <div className=" absolute left-[14%]">
              <h2 className="font-bold text-xl md:text-4xl capitalize text-gray-700  md:leading-12">
                Leverage our{" "}
                <span className="text-[#FAA61A] md:text-5xl ">2 Years</span>{" "}
                <br />
                of experience to
              </h2>
              <h1 className="mt-3 font-bold text-3xl md:text-5xl">
                Get Your Software Built
              </h1>

              <div className="flex flex-col md:flex-row gap-3 items-start md:items-center mt-5">
                <Link
                  href="/contact-us"
                  className="text-white font-semibold bg-[#7E7670] px-6 py-2 rounded-full text-base md:text-lg flex items-center gap-1 shadow-md"
                >
                  Schedule an Appointment
                  <FaChevronRight size={15} className="text-[#FAA61A]" />
                </Link>

                <Link
                  href="/services"
                  className="text-[#FAA61A] font-semibold bg-white border-2 border-[#FAA61A] px-6 py-2 rounded-full text-base md:text-lg flex items-center gap-1 shadow-md"
                >
                 Our Services
                  <FaChevronRight size={15} className="text-[#FAA61A]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
