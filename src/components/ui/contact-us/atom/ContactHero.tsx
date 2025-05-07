
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

const ContactHero = () => {
  return (
    <section>
      <div className="w-full h-auto">
        <div
          style={{
            backgroundImage: `url('contact/contact.jpg')`,
            // width: '100%',
            height: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="relative object-none object-center"
        >
          <div className="absolute inset-0 bg-black  opacity-60 flex flex-col justify-center items-center">
            <h2 className="font-bold text-lg md:text-3xl  text-[#FFFFFF] uppercase">
              Contact Us
            </h2>
            <div className="flex gap-3 items-center mt-4">
              <Link href="/" className="text-gray-300 font-normal text-sm md:text-base">
                Home
              </Link>
              <MdArrowForwardIos className="text-gray-300" />
              <Link
                href=""
                className=" text-[#FAA61A] bg-clip-text font-normal text-sm md:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
