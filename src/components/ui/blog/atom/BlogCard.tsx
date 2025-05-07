"use client"
import React, { useState } from "react";
import blog from "/public/blog/1.jpg";
// import offer from "/public/blog/new.png";
import offer from "/public/blog/offer.jpg";

import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { useGetBlogApiQuery } from "@/redux/feature/api/blog-api/blogApi";
import { BlogItem } from "@/app/api/blogs/route";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { IoBookmarkSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/redux-store/store";
import { addBookmark } from "@/redux/feature/bookmark/BookmarkSlice";

const BlogCard = () => {
  const [showMsgIds, setShowMsgIds] = useState<number[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  
    const { data, isLoading } = useGetBlogApiQuery();
    const blogListData: BlogItem[] = data ?? [];

      const bookmarkedIds = useSelector(
        (s: RootState) => s.bookmarks.items.map((b) => b.id)
      );
    
      const handleBookmark = (item: BlogItem) => {
        const already = bookmarkedIds.includes(item.id);
        if (already) return;
    
        dispatch(addBookmark(item));
    
        // show message
        setShowMsgIds((ids) => [...ids, item.id]);
        // hide after 3s
        setTimeout(() => {
          setShowMsgIds((ids) => ids.filter((id) => id !== item.id));
        }, 3000);
      };

    if (isLoading) return <p className="text-base font-semibold">Loading...</p>;

  return (
    <div className="mt-2 bg-[#E5EDEF] dark:bg-[#111827] p-3 rounded-md flex sm:flex-col md:flex-row gap-3 sm:gap-5">
      <div className="flex sm:flex-col gap-3 sm:basis-[60%]">

      <div className="basis-[35%]">

        <Image
          src={blog}
          width={800}
          height={600}
          alt="img"
          className="rounded-md w-full h-full md:h-[465px]"
        />
        
      </div>
          {/* for mobile device */}
    <div className="basis-[65%] block mt-2 relative">

<button className="cursor-pointer absolute right-0">
<IoMdClose />

</button>
<h4 className="text-base font-medium text-gray-600 dark:text-gray-300">
  Contine Reading
</h4>
<p className="text-lg font-semibold text-gray-700 leading-tight dark:text-gray-300">
  Lorem ipsum dolor sit amet consectetur adipisicing
</p>
<p className="text-sm font-normal text-gray-600 text-end dark:text-gray-300">3 left</p>
<div className="mt-2 relative">
<p className="bg-gray-400 h-[4px] w-full rounded-md"></p>

    <p className="bg-[#FAA61A] h-[4px] w-[70%] rounded-md absolute top-0"></p>
</div>
</div>
{/* for mobile device  end*/}
      </div>

      <div className="hidden sm:block basis-[65%] sm:basis-[40%] relative">

    


        {/* for desktop device start */}
         {/* for desktop device start */}
<div className=" grid-cols-1 sm:gap-4 hidden sm:grid">
  {blogListData.slice(0, 3).map((item) => {
    const isBookmarked = bookmarkedIds.includes(item.id);
    const showMsg = showMsgIds.includes(item.id);

    return (
      <div
        key={item.id}
        className=" p-3 rounded-md flex gap-3 bg-white shadow"
      >
        <div className="basis-[35%]">
          <Image
            src={item.img}
            width={800}
            height={600}
            alt={item.title}
            className="rounded-md h-full object-cover"
          />
        </div>
        <div className="basis-[65%] relative">
          <button className="absolute right-0">
            <BsThreeDotsVertical size={20} />
          </button>

          {isBookmarked ? (
            <Link
              href="/book-mark"
              className="absolute bottom-0 right-0 text-sm font-normal text-blue-500 hover:text-[#FAA61A]"
            >
              Go draft
            </Link>
          ) : (
            <button
              onClick={() => handleBookmark(item)}
              className="absolute bottom-0 right-0 text-[#FAA61A] hover:text-amber-400 transition-all duration-200"
            >
              <IoBookmarkSharp size={20} />
            </button>
          )}

          {showMsg && (
            <div className="absolute bottom-6 right-0 text-[#FAA61A] py-1 px-2 text-xs bg-white rounded-md shadow-sm">
              Added to bookmark!
            </div>
          )}

          <button className="mt-4 text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
            {item.subTitle}
          </button>

          <Link href={`/blog/${item.slug}`}>
            <p className="mt-2 text-lg font-semibold text-gray-700 leading-tight">
              {item.title}
            </p>
          </Link>

          <div className="mt-2 flex items-center gap-2">
            <Image
              src={item.userImg}
              alt={item.userName}
              width={35}
              height={35}
              className="rounded-full border border-gray-200"
            />
            <div>
              <p className="text-sm font-medium text-gray-500">
                {item.userName}
              </p>
              <p className="text-xs font-medium text-gray-500">
                {item.userTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  })}

  <div className="relative">
    <Link href="" >

    <Image src={offer} alt="img" width={400} height={300} className="w-full  rounded-md object-cover"/>
    </Link>
 
  </div>

  {blogListData.length === 0 && (
    <p className="text-center text-gray-500 mt-10">No blogs found.</p>
  )}
</div>
{/* for desktop device end */}

        {/* for desktop device end */}

      </div>
    </div>
  );
};

export default BlogCard;
