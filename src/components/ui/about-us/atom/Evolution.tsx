import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import React from 'react'
import up from '/public/vission/up.png'

const Evolution = () => {
  return (
    <div className="relative bg-gradient-to-b from-black/10 to-[#FAA61A]/10 p-10">
       
    <MaxWidthWrapper>
        <h2 className="text-xl md:text-3xl  font-bold  uppercase mt-20">
From Environmental Roots to Information Technology Frontiers: <br /> The Evolution of Software Innovations
</h2>
<p className="h-[2px] bg-[#FAA61A] w-[100px] mt-3"></p>

<p className='text-base font-semibold text-gray-600 mt-4'>Throughout its journey, Software Innovations has been dedicated to solving complex environmental challenges and designing sustainable solutions. Given that large-scale environmental issues like flooding and water pollution cannot be tested through real-world scenarios, sophisticated computer simulations have become essential for analyzing these problems and devising effective solutions. With the rapid advancement of technology and the increasing availability of high-resolution data, new digital tools have emerged, significantly enhancing the efficiency and accuracy of environmental professionals.</p>

<p className='text-base font-semibold text-gray-600 mt-4 md:mb-10'>Throughout its journey, Software Innovations has been dedicated to solving complex environmental challenges and designing sustainable solutions. Given that large-scale environmental issues like flooding and water pollution cannot be tested through real-world scenarios, sophisticated computer simulations have become essential for analyzing these problems and devising effective solutions. With the rapid advancement of technology and the increasing availability of high-resolution data, new digital tools have emerged, significantly enhancing the efficiency and accuracy of environmental professionals.</p>
    </MaxWidthWrapper>
    <div className='md:absolute bottom-0 left-0 '>
            <Image src={up} alt='img' width={300} height={200}/>
        </div>
  </div>
  
  )
}

export default Evolution