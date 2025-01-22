import React from 'react'
import { Link } from 'react-router'
import Image from '../components/Image'
const SinglePost = () => {
  return (

 <div className='flex  flex-col'>
   {/* image and titles */}
    <div className='flex  gap-4'>
        <div className='w-full xl:w-3/5 flex flex-col  gap-8'>
            <h1 className='text-xl md:text-3xl  xl:text-5xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolor!</h1>
          <div className=' flex items-center text-gray-400  gap-2 text-sm '>
              <span>written by</span>
              <Link className='text-blue-800'>Jhon Doe</Link>
              <span>on</span>
              <Link className='text-blue-800' to='/posts?cat=web-design'>web design</Link>
              <span>2 days ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rem deleniti delectus ad culpa dolores temporibus ipsum dignissimos quae sed?</p>
        </div>
        <div className='hidden xl:block xl:w-2/5'>
          <Image path="assets/postImg.jpeg" className="rounded-2xl object-cover" w="600"/>
        </div>
    </div>

    {/* content */}
    <div className='flex flex-col md:flex-row gap-8 my-8'>
      <div className='lg:w-4/5 lg:text-lg md:text-base flex flex-col gap-6 text-justify'>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, in recusandae a rem ipsum quos minus enim quas odit, eveniet ad, repudiandae fugit. Voluptas asperiores, accusantium aliquam esse sequi omnis illum vitae repudiandae accusamus similique quam? A, voluptatibus in. Incidunt minus cupiditate inventore odio quis a omnis cum facere deserunt.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, in recusandae a rem ipsum quos minus enim quas odit, eveniet ad, repudiandae fugit. Voluptas asperiores, accusantium aliquam esse sequi omnis illum vitae repudiandae accusamus similique quam? A, voluptatibus in. Incidunt minus cupiditate inventore odio quis a omnis cum facere deserunt.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, in recusandae a rem ipsum quos minus enim quas odit, eveniet ad, repudiandae fugit. Voluptas asperiores, accusantium aliquam esse sequi omnis illum vitae repudiandae accusamus similique quam? A, voluptatibus in. Incidunt minus cupiditate inventore odio quis a omnis cum facere deserunt.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, in recusandae a rem ipsum quos minus enim quas odit, eveniet ad, repudiandae fugit. Voluptas asperiores, accusantium aliquam esse sequi omnis illum vitae repudiandae accusamus similique quam? A, voluptatibus in. Incidunt minus cupiditate inventore odio quis a omnis cum facere deserunt.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, in recusandae a rem ipsum quos minus enim quas odit, eveniet ad, repudiandae fugit. Voluptas asperiores, accusantium aliquam esse sequi omnis illum vitae repudiandae accusamus similique quam? A, voluptatibus in. Incidunt minus cupiditate inventore odio quis a omnis cum facere deserunt.</p>
      </div>

      <div className='flex flex-col gap-8 lg:w-1/5'>
      {/* author */}
       <div className=' flex flex-col gap-2'>
        <h5 className='font-bold capitalize'>author</h5>
        <div className='flex  items-center gap-4'>
          <Image path="assets/userImg.jpeg" className="rounded-full object-cover" w="50" h="50"/>
          <p className='font-semibold'>Jhon Doe</p>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
        <ul className='flex gap-1'>
          <Link to="#">
          <Image path="assets/instagram.svg" className=" object-cover" />
          </Link>
          <Link to="#">
          <Image path="assets/facebook.svg" className=" object-cover" />
          </Link>
        </ul>

       </div>

       {/* actions */}
       <div className=' flex flex-col'>
        <h5 className='font-bold capitalize mb-2'>actions</h5>
        <ul className='flex flex-col gap-3'>
          <Link to="#" className='flex gap-1'>
          <Image path="assets/delete.svg" className=" object-cover" />
          <p className='text-sm'>Save this post</p>
          </Link>
          <Link to="#" className='flex gap-1'>
          <Image path="assets/delete.svg" className=" object-cover"  w="20" h="10"/>
          <p className='text-sm'>Delete this post</p>
          </Link>
        </ul>

       </div>

       {/* categories */}
       <div className='flex flex-col'>
        <h5 className='font-bold capitalize mb-2'>categories</h5>
        <ul className='flex flex-col gap-3'>
          <Link to="#" className=''>
              Save this post
          </Link>
         
        </ul>

       </div>
      </div>
    </div>

 </div>

   
  )
}

export default SinglePost
