import { FaPaperPlane } from "react-icons/fa";
import { RiHome3Fill } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import fromImg from "/public/contact/contact2.png";
import ContactFormInfo from "./ContactInfoForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ContactForm = () => {
  return (
    <div>

    <MaxWidthWrapper>

    <section className="pt-10 md:pt-15">
      <div>
        <p className="font-semibold text-sm	uppercase  flex items-center justify-center gap-3 text-gray-900">
          Contact Us <FaPaperPlane className="text-[#FAA61A]" />
        </p>
        <h2 className="text-center mt-2 text-gray-700 uppercase font-bold">
          Let’s Chat, Reach Out to us
        </h2>
        <p className=" text-base md:text-xl font-normal text-gray-600 w-[100%] md:w-[60%] mx-auto text-center mt-2">
          Have any questions? We’re here to help. Send us a message, and we’ll
          respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10  p-4 ">
        <div className="bg-gradient-to-t from-[#757480] to-[#25233a]  p-6 rounded-lg relative">
          <p className="font-semibold text-xs	uppercase  flex items-center text-gray-100 gap-2">
            Message now <FaPaperPlane className="text-[#FAA61A]" />
          </p>

          <p className=" text-lg md:text-[28px] font-semibold text-gray-100 mt-1">
            We’d love to hear, form you
          </p>
          <p className="text-[#C9C9C9] text-base md:text-xl font-normal mt-3">
            Have any questions? We’re here to help. Send us a message, and we’ll
            respond within 24 hours.
          </p>

          <div className="flex items-start mt-28 gap-2">
            <RiHome3Fill size={26} className="text-gray-100 " />
            <p className=" text-base font-normal text-gray-100 w-[300px]">
            GK Nibash 69/A (Suite: B2) <br /> 462 No South, Basabo Tempo Stand, Sabujbag, Dhaka 1214
            </p>
          </div>
          <p className=" text-base font-normal text-gray-100 w-[300px] mt-4 flex items-center  gap-2">
            {" "}
            <FaPhoneVolume size={20} />
            01681610033
          </p>

          <p className=" text-base font-normal text-gray-100 w-[300px] mt-4 flex items-center  gap-2">
            {" "}
            <TiMessages size={25} />
            mysoftwareinnovations@gmail.com
          </p>

          <div className="text-gray-100 mt-28 flex gap-3">
            <Link href="#">
              {" "}
              <FaFacebook size={25} />
            </Link>
            <Link href="#">
              {" "}
              <FaInstagram size={25} />
            </Link>
            <Link href="#">
              {" "}
              <FaLinkedin size={25} />
            </Link>
            <Link href="#">
              {" "}
              <RiTwitterXFill size={25} />
            </Link>
          </div>
          <Image
            src={fromImg}
            width={200}
            height={200}
            alt="image"
            className="absolute bottom-0 right-0 w-[80px] h-[80px] md:w-[180px] md:h-[180px] object-contain"
          />
        </div>

        <div>
          <ContactFormInfo />
        </div>
      </div>

     
    </section>
    </MaxWidthWrapper>
     {/* map */}
     <div className="mt-10">
     <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2248647258853!2d90.42914608664732!3d23.739359434237105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9003f09e96b%3A0x5ba343881aa0e4e4!2sSoftware%20Innovations!5e0!3m2!1sen!2sbd!4v1746508875391!5m2!1sen!2sbd"
       allowFullScreen
       loading="lazy"
       className="w-full h-[300px] md:h-[500px]"
     ></iframe>
   </div>
    </div>
  );
};

export default ContactForm;
