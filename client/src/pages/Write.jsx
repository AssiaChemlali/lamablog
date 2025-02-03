import React,{useEffect, useState} from 'react'
import {CATEGORIES}from '../lib/index'
import { useAuth, useUser } from '@clerk/clerk-react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill'
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { toast } from 'react-toast'
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';
import Upload from '../components/Upload';


const Write = () => {
  const {isLoaded,isSignedId}=useUser()
  const [value, setValue] = useState('');
  const [cover, setCover] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [progress, setProgress] = useState(0);

   useEffect(()=>{
    image && setValue(prev=>prev+`<p><image src="${image.url}"/></p>`)
   },[image])

   useEffect(()=>{
   video && setValue(prev=>prev+`<p><iframe class="ql-video" src="${video.url}"/></p>`)
   },[video])

  const navigate=useNavigate()
  const {getToken}=useAuth()

  const mutation = useMutation({
    mutationFn: async(newPost) => {
      const token=await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
    },

    onSuccess:(res)=>{
      toast.success("Post has been created")
      navigate(`/${res.data.slug}`)
    }
  })
  if(!isLoaded){
    return <div className=''>loading...</div>
  }
  if(isLoaded && isSignedId){
    return <div className=''>you shold login!</div>
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const formData=new FormData(e.target)
    const data={
      img:cover.path || "",
      title:formData.get('title'),
      category:formData.get('category'),
      desc:formData.get('desc'),
      content:value,
    }
    mutation.mutate(data)
    console.log(data)
  }

  

  return (
    <div className='w-full h-[calc(100vh - 64px)] md:h-[calc(100vh - 80px)] flex flex-col gap-6 '>
       <p className='text-xl font-light'>Create a New Post</p>
       <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full"> 

       
        <Upload type="image" setProgress={setProgress} setData={setCover}>
         <button className='bg-gray-50 shadow-md  text-gray-600 rounded-xl py-2 px-3 capitalize text-base w-max '>add a cover image</button>
        </Upload>
        <input 
        className='text-gray-700 text-4xl py-2 font-semibold capitalize bg-transparent outline-none'
        type="text" 
        name="title" 
        placeholder='My awesome story'/>

        <div className='flex  items-center gap-3 text-sm font-semibold'>
          <label className='text-gray-800 text-sm '>Choose a Category</label>
          <select name="category" id="" className='p-3 rounded-xl outline-none shadow-md'>
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

        <div className='flex flex-1'>
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImage}>🖼️</Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>📹</Upload>
          </div>

          <ReactQuill 
          theme="snow"  
          className='flex-1 rounded-xl bg-white shadow-md' 
          value={value} 
          onChange={setValue}
          readOnly={0 < progress && progress < 100}
          />
        </div>
     
         
       
        
        <button 
          disabled={mutation.isPending || (0<progress && progress<100)}
          className='bg-blue-800 text-white py-2 px-4 rounded-xl font-medium w-max disabled:bg-blue-400 disabled:cursor-not-allowed'>
          {mutation.isPending ? 'Loading...': 'send'}
          
        </button>
        {"Progress:" + progress}
        {mutation.isError &&  <div>An error occurred: {mutation.error.message}</div>}

       </form>
    </div>
  )
}

export default Write
