import React from 'react'

import CommentItem from './CommentItem'
const Comments = () => {
  return (
    <div className='lg:w-3/5 border flex flex-col gap-8'>
      <h5 className='font-bold capitalize mb-2 text-xl '>comments</h5>
      <form className='flex items-center gap-4 justify-between w-full'>
        <textarea placeholder='Write a comments' name="" id="" className='rounded-xl p-5 w-full' ></textarea>
        <button type="submit" className='bg-blue-800 text-white py-2 px-4  rounded-xl font-semibold'>send</button>
      </form>

      <CommentItem/>
      <CommentItem/>
      <CommentItem/>
      <CommentItem/>
      <CommentItem/>
      <CommentItem/>
      
    </div>
  )
}

export default Comments
