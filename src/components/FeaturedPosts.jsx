import React from 'react'
import Image from './Image'
import ArticleItem from './ArticleItem'
import { Link } from 'react-router'

const FeaturedPosts = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-4  py-5'>
     
      <article className='w-full lg:w-1/2 flex flex-col gap-4'>
        <Image path="assets/featured1.jpeg" className="rounded-3xl object-cover"/>

        <p className='flex items-center gap-4 text-sm '>
          <span className='font-semibold lg:text-lg'>01,</span>
          <Link to="/posts?cat=web-design" className='text-blue-800 lg:text-lg'>Web Design</Link>
          <span className='text-gray-500'>2 days ago</span>
        </p>

        <Link to="/test" className='font-semibold text-xl lg:text-3xl lg:font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
      </article>

      
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        <ArticleItem imagePath="assets/featured2.jpeg"/>
        <ArticleItem imagePath="assets/featured3.jpeg"/>
        <ArticleItem imagePath="assets/featured4.jpeg"/>
      </div>
      
    </div>
  )
}

export default FeaturedPosts
