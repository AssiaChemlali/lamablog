import React from 'react'
import { Link, useParams } from 'react-router'
import Image from '../components/Image'
import { CATEGORIES } from '../lib'
import Search from '../components/Search'
import PostMenuAction from '../components/PostMenuAction'
import Comments from '../components/Comments'
import Categries from './Categries'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchPost=async(slug)=>{
  const res=await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`)
  return res.data
}
const SinglePost = () => {
  const {slug}=useParams()
  const {isPending,error,data}=useQuery({
    queryKey:["post",slug],
    queryFn:()=>fetchPost(slug),
  })

  if(isPending) return "loading ..."
  if(error) return "something went wrong..." + error.message
  if(!data) return "Post not found ..."
  return (

 <div className='flex  flex-col'>
   {/* image and titles */}
    <div className='flex  gap-4'>
        <div className='w-full xl:w-3/5 flex flex-col  gap-8'>
            <h1 className='text-xl md:text-3xl  xl:text-5xl font-semibold'>{data.title}</h1>
          <div className=' flex items-center text-gray-400  gap-2 text-sm '>
              <span>written by</span>
              <Link className='text-blue-800'>{data.user.username}</Link>
              <span>on</span>
              <Link className='text-blue-800' to='/posts?cat=web-design'>{data.category}</Link>
              <span>{format(data.createdAt)}</span>
            </div>
            <p>{data.desc}</p>
        </div>
          {data.img && 
          <div className='hidden xl:block xl:w-2/5'>
            <Image path={data.img} className="rounded-2xl object-cover" w="600"/>
          </div>
          }
    </div>

    {/* content */}
    <div className='flex flex-col md:flex-row gap-8 my-8'>
      <div className='lg:w-4/5 lg:text-lg md:text-base flex flex-col gap-6 text-justify'>
         {data.content}
      </div>

       {/* sidebar */}
      <div className='px-4 h-max sticky top-8  flex flex-col gap-8 lg:w-1/5'>
      {/* author */}
       <div className='flex flex-col gap-2'>
        <h5 className='font-bold capitalize'>author</h5>
        <div className='flex  items-center gap-4'>
          {data.user.img && <Image path={data.user.img} className="w-12 h-12 rounded-full object-cover" w="50" h="50"/>}
          

          <p className='font-semibold text-blue-800'>Jhon Doe</p>
        </div>
        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</p>
        <ul className='flex gap-1'>
          <Link to="#">
            <Image 
            path="assets/instagram.svg" 
            className=" object-cover" />
          </Link>
          <Link to="#">
            <Image 
            path="assets/facebook.svg" 
            className=" object-cover" />
          </Link>
        </ul>

       </div>

       {/* actions */}
       <PostMenuAction/>

       {/* categories */}
       <div className='flex flex-col'>
        <h5 className='font-bold capitalize mb-2'>categories</h5>
       
        <Categries/>

       </div>

       {/* search */}
       <div className='flex flex-col'>
        <h5 className='font-bold capitalize mb-2'>search</h5>
       <Search/>

       </div>
       
      </div>
    </div>
    {/* comments */}
    <Comments/>

 </div>

   
  )
}

export default SinglePost
