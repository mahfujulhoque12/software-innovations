"use client";

import { BlogItem } from "@/app/api/blogs/route";
import { useGetBlogApiQuery } from "@/redux/feature/api/blog-api/blogApi";
import { addBookmark } from "@/redux/feature/bookmark/BookmarkSlice";
import { AppDispatch, RootState } from "@/redux/redux-store/store";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoBookmarkSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const categories = ["For you", "Trending", "Following", "Popular", "New"];

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState("For you");
  const [showMsgIds, setShowMsgIds] = useState<number[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading } = useGetBlogApiQuery();
  const blogListData: BlogItem[] = data ?? [];

  const bookmarkedIds = useSelector(
    (s: RootState) => s.bookmarks.items.map((b) => b.id)
  );

  if (isLoading) return <p className="text-base font-semibold">Loading...</p>;

  const filteredData =
    selectedCategory === "For you"
      ? blogListData
      : blogListData.filter((item) => item.category === selectedCategory);

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

  return (
    <div className="mt-5 relative">
      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`p-2 text-sm sm:text-base lg:text-lg font-semibold cursor-pointer border-b-2 whitespace-nowrap ${
              selectedCategory === cat
                ? "text-[#FAA61A] border-b-[#FAA61A]"
                : "text-gray-700  border-b-transparent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blogs */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-5">
        {filteredData.map((item) => {
          const isBookmarked = bookmarkedIds.includes(item.id);
          const showMsg = showMsgIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="mt-3 p-3 rounded-md flex gap-3 bg-white  shadow"
            >
              <div className="basis-[35%] ">
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

                {isBookmarked ? (<div>
                  <Link  className={`absolute bottom-0 right-0 transition-all duration-200 text-sm font-normal hover:text-[#FAA61A] text-blue-500 `} href="/book-mark">
                  Go draft
                  </Link>

                </div>
                ):(<div>
                      <button
                  onClick={() => handleBookmark(item)}
                  disabled={isBookmarked}
                  className={`absolute bottom-0 right-0 transition-all duration-200 ${
                    isBookmarked
                      ? "text-gray-400 cursor-not-allowed"
                      : "hover:text-amber-400 text-[#FAA61A]"
                  }`}
                >
                  <IoBookmarkSharp size={20} />
                </button>
                </div>)}

              

                {showMsg && (
                  <div className="absolute bottom-6 right-0 text-[#FAA61A] py-1 px-2 text-xs bg-white rounded-md shadow-sm">
                    Added to bookmark!
                  </div>
                )}

                <button className="text-sm font-medium text-gray-600 bg-btn px-3 py-1 rounded-md">
                  {item.subTitle}
                </button>

                <Link href={`/blog/${item.slug}`}>
                  <p className="text-lg font-semibold text-gray-700 leading-tight">
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
                    <p className="text-sm font-medium text-gray-600 ">
                      {item.userName}
                    </p>
                    <p className="text-xs font-medium text-gray-600 ">
                      {item.userTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filteredData.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-300 mt-10">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
