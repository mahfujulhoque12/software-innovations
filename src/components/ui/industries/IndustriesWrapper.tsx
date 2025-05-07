import React from 'react'
import ind from '/public/ind/ind.png';
import Image from 'next/image';
import { FaArrowsDownToPeople, FaHeartCircleBolt, FaHouseFlag } from 'react-icons/fa6';
import { LuUtilityPole } from 'react-icons/lu';
import { MdAgriculture, MdEmojiTransportation, MdOutlineHomeWork } from 'react-icons/md';
import { HiAcademicCap } from 'react-icons/hi2';
import { FaBuilding, FaLuggageCart } from 'react-icons/fa';

const IndustriesWrapper = () => {
  return (
    <div className="py-5 md:py-20 w-full h-full bg-gradient-to-r from-[#FAA61A]/15 to-white/10 flex flex-col md:flex-row gap-5 ">

        <div>

      <Image src={ind} alt='ind' width={500} height={300}/>
        </div>

        <div className='px-3 md:px-0'>
        <h2 className="text-3xl  font-bold  uppercase ">
            Industries Served</h2>
        <p className="h-[2px] bg-[#FAA61A] w-[100px] mt-3 "></p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 '>
    {/* ---------- */}
        <div className='bg-white shadow-md w-full px-4 py-2 rounded-full flex items-center gap-3'>
            <button className='bg-[#E4AA56] p-2 rounded-full'>

        <FaHouseFlag size={30} className='text-white' />
            </button>
            <p className='text-gray-800 text-2xl font-semibold'>Government</p>
        </div>
   {/* ---------- */}

         {/* ---------- */}
        <div className='bg-white shadow-md w-full px-4 py-2 rounded-full flex items-center gap-3'>
            <button className='bg-[#E4AA56] p-2 rounded-full'>

        <FaArrowsDownToPeople  size={30} className='text-white' />
            </button>
            <p className='text-gray-800 text-2xl font-semibold'>Multilateral Organizations</p>
        </div>
   {/* ---------- */}
       {/* ---------- */}
       <div className='bg-white shadow-md w-full px-4 py-2 rounded-full flex items-center gap-3'>
            <button className='bg-[#E4AA56] p-2 rounded-full'>

        <LuUtilityPole  size={30} className='text-white' />
            </button>
            <p className='text-gray-800 text-2xl font-semibold'>Utilities</p>
        </div>
   {/* ---------- */}
       {/* ---------- */}
       <div className='bg-white shadow-md w-full px-4 py-2 rounded-full flex items-center gap-3'>
            <button className='bg-[#E4AA56] p-2 rounded-full'>

        <MdAgriculture  size={30} className='text-white' />
            </button>
            <p className='text-gray-800 text-2xl font-semibold'>Agriculture</p>
        </div>
   {/* ---------- */}
       {/* ---------- */}
       <div className='bg-white shadow-md w-full px-4 py-2 rounded-full flex items-center gap-3'>
            <button className='bg-[#E4AA56] p-2 rounded-full'>

        <HiAcademicCap  size={30} className='text-white' />
            </button>
            <p className='text-gray-800 text-2xl font-semibold'>Academia and Research</p>
        </div>
   {/* ---------- */}
       {/* ---------- */}
       <div className='bg-white shadow-md w-full px-4 py-2 rounded-full flex items-center gap-3'>
            <button className='bg-[#E4AA56] p-2 rounded-full'>

        <MdOutlineHomeWork  size={30} className='text-white' />
            </button>
            <p className='text-gray-800 text-2xl font-semibold'>
Non-profits
</p>
        </div>
   {/* ---------- */}
       {/* ---------- */}
       <div className='bg-white shadow-md w-full px-4 py-2 rounded-full flex items-center gap-3'>
            <button className='bg-[#E4AA56] p-2 rounded-full'>

        <FaBuilding  size={30} className='text-white' />
            </button>
            <p className='text-gray-800 text-2xl font-semibold'>Private Organizations</p>
        </div>
   {/* ---------- */}
       {/* ---------- */}
       <div className='bg-white shadow-md w-full px-4 py-2 rounded-full flex items-center gap-3'>
            <button className='bg-[#E4AA56] p-2 rounded-full'>

        <MdEmojiTransportation  size={30} className='text-white' />
            </button>
            <p className='text-gray-800 text-2xl font-semibold'>Transportation</p>
        </div>
   {/* ---------- */}
       {/* ---------- */}
       <div className='bg-white shadow-md w-full px-4 py-2 rounded-full flex items-center gap-3'>
            <button className='bg-[#E4AA56] p-2 rounded-full'>

        <FaLuggageCart   size={30} className='text-white' />
            </button>
            <p className='text-gray-800 text-2xl font-semibold'>
Land Development Agencies
</p>
        </div>
   {/* ---------- */}

    {/* ---------- */}
    <div className='bg-white shadow-md w-full px-4 py-2 rounded-full flex items-center gap-3'>
            <button className='bg-[#E4AA56] p-2 rounded-full'>

        <FaHeartCircleBolt   size={30} className='text-white' />
            </button>
            <p className='text-gray-800 text-2xl font-semibold'>Healthcare</p>
        </div>
   {/* ---------- */}



        </div>
        </div>
    </div>
  )
}

export default IndustriesWrapper
