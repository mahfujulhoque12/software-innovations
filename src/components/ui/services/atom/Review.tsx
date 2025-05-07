"use client"
import React from 'react'

import { FaStar } from "react-icons/fa6";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useGetReviewApiQuery } from '@/redux/feature/api/review-api/reviewApi';
import { ReviewType } from '@/app/api/review/route';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';




const Review= () => {

    const {data:cardData, isLoading, isError, error}=useGetReviewApiQuery()
    const reviews: ReviewType[] = cardData ?? []

    if(isLoading){
        return <p>Loading...</p>
    }
    if (isError) {
        // derive a string out of error
        let errMsg: string
        if ((error as FetchBaseQueryError).status !== undefined) {
          const fetchErr = error as FetchBaseQueryError
          errMsg = `Error ${fetchErr.status}: ${JSON.stringify(fetchErr.data)}`
        } else {
          // SerializedError
          errMsg = (error as { message?: string }).message ?? 'Unknown error'
        }
        return <p className="text-red-600">Error: {errMsg}</p>
      }

  return (
    <MaxWidthWrapper>

    <section className='py-5 md:py-10'>


        <div>
            <h2 className="text-3xl font-bold uppercase text-center text-gray-700">Join +40,000 Happy Customers Already Build There Software From Us</h2>
            <p className="h-[2px] bg-[#FAA61A] w-[200px] mt-2 flex mx-auto"></p>

            <div className="bg-[#ffffff] p-4 shadow-md border border-gray-300 mt-6">
             
                <div className='p-4'>
                <Carousel>
                  <CarouselContent>
                    {reviews.map((card)=>(
                       <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4" key={card.id}>
                          <div className='p-3 bg-gray-100 h-full flex flex-col'>
                            <div className='flex gap-2 items-center mb-3'>
                            <FaStar  className="text-yellow-400" size={20}/>
                            <FaStar  className="text-yellow-400" size={20}/> 
                            <FaStar  className="text-yellow-400" size={20}/>
                             <FaStar  className="text-yellow-400" size={20}/>
                              <FaStar  className="text-yellow-400" size={20}/>
                       
                            </div>
                            <h4 className='text-lg font-semibold text-gray-700'>{card.title}</h4>
                            <p className='text-base font-semibold text-gray-600 mb-3'>{card.designation}</p>
                            <p className="font-semibold text-sm text-gray-600">{card.des}</p>
                          </div>

                       </CarouselItem>
                    ))}

                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                </div>

                <p className='text-sm font-semibold text-gray-500 text-center'>Rated <span className='text-sm font-bold  text-gray-600'>4.9/5 </span>based on 2580 review. showing some review</p>
            </div>
        </div>
  
    </section>
         </MaxWidthWrapper>
  )
}

export default Review