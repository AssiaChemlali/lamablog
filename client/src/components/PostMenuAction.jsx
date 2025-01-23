import React from 'react'
import { Link } from 'react-router'
import Image from './Image'
const PostMenuAction = () => {
  return (
    <div className=' flex flex-col'>
    <h5 className='font-bold capitalize mb-2'>actions</h5>
    <ul className='flex flex-col gap-3'>
      <Link to="#" className='flex items-center gap-2  cursor-pointer'>
      <Image path="assets/delete.svg" className=" object-cover" />
      <p className='text-sm'>Save this post</p>
      </Link>
      <Link to="#" className='flex items-center gap-2  cursor-pointer'>
      <Image path="assets/delete.svg" className=" object-cover"  w="20" h="10"/>
      <p className='text-sm'>Delete this post</p>
      </Link>
    </ul>

   </div>
  )
}

export default PostMenuAction
