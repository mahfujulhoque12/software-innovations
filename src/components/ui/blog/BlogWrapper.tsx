import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import BlogCard from './atom/BlogCard'
import BlogList from './atom/BlogList'

const BlogWrapper = () => {
  return (
    <MaxWidthWrapper>

        <div className='px-2 py-5 mt-5'>
            <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900'>Hi!, Good Day</h1>
            <BlogCard/>
            <BlogList/>
        </div>
    </MaxWidthWrapper>
  )
}

export default BlogWrapper