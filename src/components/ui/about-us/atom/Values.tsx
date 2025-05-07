import React from 'react'
import { FaLightbulb, FaThumbsUp } from 'react-icons/fa'
import { IoRocket } from 'react-icons/io5'

const Values = () => {
  return (
    <div className="relative w-full h-[600px] mt-64 md:mt-0">
      {/* 1) Background image */}
      <div
        className="absolute inset-0 bg-[url('/about/about-us-value.png')] bg-cover bg-center"
      />

      {/* 2) Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-transparent"
      />

      {/* 3) Content */}
      <div className="absolute max-w-2xl right-[25%] top-[10%] p-5">
        <h3 className="text-3xl font-bold uppercase mt-20 text-gray-900">
          Our Core Value
        </h3>
        <div className="h-[2px] bg-[#FAA61A] w-[100px] mt-2" />

        {/* Value 1 */}
        <div className="flex items-center gap-5 mt-5">
          <FaLightbulb size={50} className="text-[#FAA61A]" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Customer satisfaction
            </h2>
            <p className="text-sm font-semibold text-gray-600 mt-1">
              Customer satisfaction through service excellence
            </p>
          </div>
        </div>

        {/* Value 2 */}
        <div className="flex items-center gap-5 mt-5">
          <IoRocket size={50} className="text-[#FAA61A]" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Innovation
            </h2>
            <p className="text-sm font-semibold text-gray-600 mt-1">
              Innovation and sustainability in design
            </p>
          </div>
        </div>

        {/* Value 3 */}
        <div className="flex items-center gap-5 mt-5">
          <FaThumbsUp size={50} className="text-[#FAA61A]" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Best value
            </h2>
            <p className="text-sm font-semibold text-gray-600 mt-1">
              Best value for clients
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Values
