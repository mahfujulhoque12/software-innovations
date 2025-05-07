import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import one from '/public/client/clients.png';
import two from '/public/client/map.png';
import Image from 'next/image';


const ClientWrapper = () => {
  return (
    <div className='bg-[#513C1D] py-5 md:py-20'>
        <MaxWidthWrapper>
            <div>
            <h2 className="text-xl md:text-3xl  font-bold  uppercase text-center text-white">Clients</h2>
        <p className="h-[2px] bg-[#FAA61A] w-[100px] mt-3 flex mx-auto"></p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                    <div>
                        <Image src={one} alt='one' width={600} height={500}/>
                    </div>
                    <div>
                        <h2 className='text-2xl md:text-6xl text-[#FAA61A] font-bold text-center'>Served</h2>
                        <p  className="text-xl md:text-3xl  font-bold  uppercase text-center text-gray-400 mt-3">Across The Globe</p>
                    <Image src={two} alt='one' width={600} height={500}/>

                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default ClientWrapper