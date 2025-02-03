import React from 'react'
import Image from './Image'
import { Link } from 'react-router'
import {format} from "timeago.js"


const PostListItem = ({post}) => {


  return (
    <article className=' flex flex-col xl:flex-row gap-8 items-center mb-8'>
        {post.img &&
        <div className='md:hidden xl:block xl:w-1/3'>
             <Image src={post.img} className="rounded-3xl w-full  object-cover" w="735"/>
        </div>}

        <div className='w-full  flex flex-col gap-3 xl:w-2/3'>
          <Link to={`/${post.slug}`} className='text-xl  font-bold md:text-2xl lg:text-3xl'>{post.title}</Link>
          <div className=' flex items-center text-gray-400  gap-2 text-sm '>
            <span>written by</span>
            <Link className='text-blue-800'>{post.user.username}</Link>
            <span>on</span>
            <Link className='text-blue-800' to='/posts?cat=web-design'>{post.category}</Link>
            <span>{format(post.createdAt)}</span>
          </div>
          <p className=''>{post.desc}</p>
        
          <Link to={`/${post.slug}`} className='font-semibold text-blue-600 capitalize underline'>read more</Link>
        </div>
      </article>
  )
}

export default PostListItem
