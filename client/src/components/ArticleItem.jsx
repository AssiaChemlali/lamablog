import React from 'react'
import Image from './Image'
import { Link } from 'react-router'
const ArticleItem = ({imagePath}) => {
  return (
    <article className='lg:h-1/3 flex justify-between gap-4'>
      <div className='w-1/3 aspect-video'>
        <Image path={imagePath} className="rounded-3xl object-cover w-full h-full" w="298"/>
      </div>
    <div className='w-2/3 flex flex-col gap-2'>
      <p className='flex items-center gap-4 text-sm  lg:text-base '>
          <span className='font-semibold lg:text-lg'>01,</span>
          <Link to="/posts?cat=web-design" className='text-blue-800 lg:text-lg'>Web Design</Link>
          <span className='text-gray-500'>2 days ago</span>
        </p>
        <Link to="/test"className='font-medium text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
    </div>
    
  </article>
  )
}

export default ArticleItem
