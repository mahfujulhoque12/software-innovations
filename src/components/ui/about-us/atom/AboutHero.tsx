// components/AboutHero.jsx
import React from 'react'

const AboutHero = () => {
  return (
    <section>
      <div className="w-full relative">
        {/* Background Image */}
        <div
          className="
            relative
            h-[400px]
            md:h-[500px]
            bg-[url('/about/about.jpg')]
            bg-cover
            bg-center
            bg-no-repeat
          "
        >
          {/* Dark Overlay & Intro Text */}
          <div className="absolute inset-0 bg-black/75 flex flex-col justify-center items-center">
            <h2 className="font-bold text-xl md:text-4xl text-[#FAA61A] uppercase">
              About Us
            </h2>
            <div className="h-0.5 bg-[#FAA61A] w-24 mt-2" />
            <p className="mt-4 text-gray-100 font-semibold text-xl text-center px-4">
              Crafting Software to Navigate Complex Challenges
            </p>
          </div>

          {/* Floating “What We Do” Card */}
          <div
            className="
              absolute
              top-[75%]
              left-0
              md:left-[20%]
              w-full
              md:w-[60%]
              bg-[#564840]
              p-10
              z-10
              flex flex-col
              space-y-4
            "
          >
            <h1 className="text-xl md:text-3xl font-bold uppercase text-white">
              What We Do For You
            </h1>
            <div className="h-0.5 bg-[#FAA61A] w-24" />
            <p className="text-base font-medium text-gray-100">
              At Software Innovations, we partner with you to bring your digital vision to life—crafting custom mobile and web applications that are as reliable and scalable as they are tailored to your unique workflows; designing intuitive, research-driven UI/UX that guides users effortlessly and elevates your brand; and producing polished, impact-driven video content—from raw footage through color grading and motion graphics—to tell your story and captivate your audience across every platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
