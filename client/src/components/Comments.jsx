import React from 'react'

import CommentItem from './CommentItem'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const fetchComments=async(postId)=>{
  const res=await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`)
  return res.data
}

const Comments = ({postId}) => {

  const {slug}=useParams()
  const {isPending,error,data}=useQuery({
    queryKey:["comments",postId],
    queryFn:()=>fetchComments(postId),
  })

  if(isPending) return "loading ..."
  if(error) return "something went wrong..." + error.message
  if(!data) return "comments not found ..."


  return (
    <div className='lg:w-3/5 border flex flex-col gap-8'>
      <h5 className='font-bold capitalize mb-2 text-xl '>comments</h5>
      <form className='flex items-center gap-4 justify-between w-full'>
        <textarea placeholder='Write a comments' name="" id="" className='rounded-xl p-5 w-full' ></textarea>
        <button type="submit" className='bg-blue-800 text-white py-2 px-4  rounded-xl font-semibold'>send</button>
      </form>

      {data.map(comment=>(
        <CommentItem key={comment._id} comment={comment}/>
      ))}
      
      
      
    </div>
  )
}

export default Comments
