// src/pages/book-mark.tsx
"use client"
import React from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'

import { AppDispatch, RootState } from '@/redux/redux-store/store'
import { removeBookmark } from '@/redux/feature/bookmark/BookmarkSlice'
import { MdRemoveCircle } from 'react-icons/md'
import Link from 'next/link'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function BookmarkPage() {
  const bookmarks = useSelector((state: RootState) => state.bookmarks.items)
  const dispatch = useDispatch<AppDispatch>()

  if (bookmarks.length === 0) {
    return <div className='bg-primary my-10 py-10'>
        <p className="p-5 text-center">No bookmarks yet.</p>
        <div className='flex justify-center'>

        <Link href="blog" className='text-red-300 text-sm font-semibold text-center'>Go to Blog</Link>
        </div>
    </div>
  }

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {bookmarks.map(data => (
         <div
         key={data.id}
         className="mt-3 p-3 rounded-md flex gap-3 bg-white shadow"
       >
         <div className="basis-[35%]">
           <Image
             src={data.img}
             width={800}
             height={600}
             alt="img"
             className="rounded-md h-full object-cover"
           />
         </div>
         <div className="basis-[65%] relative">
           <button className="cursor-pointer absolute right-0">
             <BsThreeDotsVertical size={20} />
           </button>

           <button
           onClick={() => dispatch( removeBookmark(data.id))}
           className="absolute bottom-0 right-0 text-red-500 hover:text-amber-400 transition-all duration-200"
         >
           <MdRemoveCircle  size={20} />
         </button>
         
           <button className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md ">
             {data.subTitle}
           </button>
           <Link href={`/blog/${data.slug}`}>
             <p className="text-lg font-semibold text-gray-700 leading-tight">
               {data.title}
             </p>
           </Link>
           <div className="mt-2 flex items-center gap-2">
             <Image
               src={data.userImg}
               alt="user"
               width={100}
               height={100}
               className="h-[35px] w-[35px] rounded-full border border-gray-200"
             />
             <div>
               <p className="text-sm font-medium text-gray-500">
                 {data.userName}
               </p>
               <p className="text-xs font-medium text-gray-500">
                 {data.userTitle}
               </p>
             </div>
           </div>
         </div>
       </div>
      ))}
    </div>
  )
}
