// app/blog/[slug]/page.tsx
"use client"
import { notFound } from "next/navigation";
import Image from "next/image";
import React, { use } from "react";
import { GoDotFill } from "react-icons/go";
import { FaChevronLeft } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import Link from "next/link";
import { BlogItem } from "@/app/api/blogs/route";
import { useGetBlogApiQuery } from "@/redux/feature/api/blog-api/blogApi";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = ({ params }: PageProps) => {
    const {data}= useGetBlogApiQuery()
    const blogListData: BlogItem[] = data ?? [];
    const { slug } = use(params);
  const blog = blogListData.find((item) => item.slug === slug);

  if (!blog) return notFound();

  return (
    <div className="relative mb-10 ">
      <Link href="/blog" className="cursor-pointer absolute left-3 top-3 text-white">
        <FaChevronLeft  size={20} />
      </Link>
      <button className="cursor-pointer absolute right-3 top-3 text-white">
        <HiDotsVertical  size={20} />
      </button>
      <Image src={blog.img} alt="img" width={2000} height={500} className="sm:h-[500px] object-cover" />

      <div className="bg-btn p-4">
        <button className="text-sm sm:text-base font-medium text-gray-700   px-3 py-1 rounded-md ">
          {blog.subTitle}
        </button>
        <h2 className="text-3xl font-bold text-gray-800  mt-3">{blog.title}</h2>

        {/* user info  start*/}
        <div className="mt-4 flex items-center gap-2 ">
          <Image
            src={blog.userImg}
            alt="user"
            width={100}
            height={100}
            className="h-[35px] w-[35px] rounded-full border border-gray-200"
          />
          <div>
            {/* ------- */}
            <div className="flex items-center gap-2">
              <p className="text-sm sm:text-base font-medium text-gray-700 ">
                {blog.userName}
              </p>
              <p className="text-sm sm:text-base font-semibold text-green-600 flex items-center gap-1">
                <GoDotFill size={15} /> Follow
              </p>
            </div>
            {/* ------- */}

            {/* --********------- */}
            <div className="flex items-center gap-2">
              <p className="text-xs sm:text-sm  font-medium text-gray-700 "> 24 May 2025 </p>
              <p className="text-xs sm:text-sm  font-medium text-gray-700  flex items-center gap-1">
                <GoDotFill size={15} /> 5 min ago
              </p>
              <p className="text-xs sm:text-sm  font-medium text-gray-700  flex items-center gap-1">
                <GoDotFill size={15} /> 124 post new
              </p>
            </div>
            {/* --********------- */}
          </div>
        </div>

        {/* user info end */}

        {/* paragraph */}
        <p className="mt-5 text-sm sm:text-base font-medium text-gray-700  capitalize">
          {blog.des1}
        </p>
        <p className="mt-5 text-sm sm:text-base font-medium text-gray-700  capitalize">
          {blog.des2}
        </p>
        <p className="mt-5 text-sm sm:text-base font-medium text-gray-700  capitalize">
          {blog.des3}
        </p>

        <p className="mt-5 text-sm sm:text-base font-medium text-gray-700  capitalize">
          {blog.des4}
        </p>

        {/* paragraph */}
      </div>
    </div>
  );
};

export default Page;
