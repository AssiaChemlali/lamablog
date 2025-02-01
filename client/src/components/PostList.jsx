import React from 'react'
import Image from './Image'
import { Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
const PostList = () => {
  const {isPending,error,data}=useQuery({
    
  })
  
  return (
    <article className=' flex flex-col xl:flex-row gap-8 items-center'>
      <div className='md:hidden xl:block xl:w-1/3'>
          <Image path="assets/postImg.jpeg" className="rounded-3xl w-full  object-cover" w="700"/>
      </div>
    

    <div className='w-full  flex flex-col gap-3 xl:w-2/3'>
      <Link to="/test" className='text-xl  font-bold md:text-2xl lg:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Link>
      <div className=' flex items-center text-gray-400  gap-2 text-sm '>
        <span>written by</span>
        <Link className='text-blue-800'>Jhon Doe</Link>
        <span>on</span>
        <Link className='text-blue-800' to='/posts?cat=web-design'>web design</Link>
        <span>2 days ago</span>
      </div>
      <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam placeat eveniet culpa consequatur ad atque enim itaque totam ex porro?</p>
    
      <Link to="/test" className='font-semibold text-blue-600 capitalize underline'>read more</Link>
    </div>
  </article>
  )
}

export default PostList
