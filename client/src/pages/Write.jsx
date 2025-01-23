import React from 'react'
import {CATEGORIES}from '../lib/index'
import { useUser } from '@clerk/clerk-react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill'
const Write = () => {
  const {isLoaded,isSignedId}=useUser()
  if(isLoaded && isSignedId){
    return <div className=''>you shold login!</div>
  }
  return (
    <div className='w-full h-[calc(100vh - 64px)] md:h-[calc(100vh - 80px)] flex flex-col gap-6 '>
       <p className='text-xl font-light'>Create a New Post</p>
       <form className="flex flex-col gap-6 h-full">  
        <button className='bg-gray-50 shadow-md  text-gray-600 rounded-xl py-2 px-3 capitalize text-base w-max '>add a cover image</button>
        <input 
        className='text-gray-700 text-4xl py-2 font-semibold capitalize bg-transparent outline-none'
        type="text"  
        placeholder='My awesome story'/>

        <div className='flex  items-center gap-3 text-sm font-semibold'>
          <label className='text-gray-800 text-sm '>Choose a Category</label>
          <select name="cat" id="" className='p-3 rounded-xl outline-none shadow-md'>
            {
              CATEGORIES.map((cat,index)=>{
                if(cat.label==="all posts") return
                return(
                  <option value={cat.label} key={index} className='capitalize px-2'>{cat.label}</option>
                )
              })
            }
          
          </select>
        </div>

        <textarea name="desc" id="" placeholder='A Short description' className='bg-white p-4  rounded-xl shadow-md'></textarea>

     
          <ReactQuill theme="snow"  className='flex-1 rounded-xl bg-white shadow-md h-full'/>
       
        
        <button className='bg-blue-800 text-white py-2 px-4 rounded-xl font-medium w-max'>Send </button>
       </form>
    </div>
  )
}

export default Write
