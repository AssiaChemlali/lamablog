import React, { useState } from 'react'
import PostList from '../components/PostList'

import SideMenu from '../components/SideMenu'
const Posts = () => {

  const [open,setOpen]=useState(false)

  return (
    <div className=''>
      <h1 className='my-8 capitalize  font-bold mb-5 text-2xl text-gray-800 '>Development Blog</h1>

      <button className='md:hidden bg-blue-800 text-white py-2 px-4 rounded-xl font-medium w-max mb-3' onClick={()=>setOpen(!open)}> {open ? 'Close':'Open'}</button>

         {/* postslists */}
        <div className='flex flex-col lg:flex-row gap-12'>

          <div className='order-2 md:order-1 w-full  flex flex-col gap-12 lg:w-4/5'>
              <PostList/>
            
          </div>

            {/* sidebar  */}
            <div 
            className={`${open ? 'block':'hidden'} order-1 md:order-2  md:block lg:w-1/5 `}>
              <SideMenu/>
            </div>
        </div>
  
    

  </div>
  )
}

export default Posts
