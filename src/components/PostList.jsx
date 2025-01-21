import React from 'react'
import Image from './Image'
import { Link } from 'react-router'
const PostList = () => {
  return (
    <article className=' flex flex-col md:flex-row gap-4 items-center'>
    <Image path="assets/postImg.jpeg" className="rounded-3xl w-full md:w-1/2"/>
    <div className='w-full md:w-1/2 flex flex-col gap-3'>
      <h2 className='text-xl  font-bold md:text-2xl lg:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
      <div className=' text-gray-500 flex gap-3 text-sm '>
        <span>written by</span>
        <Link className='font-bold'>Jhon Doe</Link>
        <span>on</span>
        <Link className='font-bold' to='/posts?cat=web-design'>web design</Link>
        <span>2 days ago</span>
      </div>
      <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam placeat eveniet culpa consequatur ad atque enim itaque totam ex porro?</p>
    
      <Link to="/test" className='font-semibold text-blue-600 capitalize underline'>read more</Link>
    </div>
  </article>
  )
}

export default PostList
