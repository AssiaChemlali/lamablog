import React from 'react'
import Image from './Image'
const CommentItem = () => {
  return (
    <div className='bg-slate-50  p-4  rounded-xl flex flex-col gap-4'>
    <div className="flex gap-4 items-center text-sm">
      <Image path="assets/userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"/>
      <p className='text-blue-800 font-semibold'>Jhon Doe</p>
      <p className='text-gray-600'>2 days ago</p>
    </div>
    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta, odit vel expedita fugit rerum sapiente earum placeat ad soluta vitae nihil, illo quidem. </p>
  </div>
  )
}

export default CommentItem
