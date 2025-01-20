import React from 'react'
import { Link } from 'react-router'
import { CATEGORIES } from '../lib'
import Search from './Search'
const MainCategories = () => {
  return (
    <div className='hidden md:flex items-center justify-between bg-white rounded-3xl xl:rounded-full p-5 shadow-lg gap-8'>
      <nav className='flex-1 flex items-center justify-between flex-wrap'>
        {CATEGORIES.map((cat,index)=>{
          return(
              <Link 
              key={index}
              to={cat.href}
              className={`${cat.label==='all posts' ? 'bg-blue-800 text-white ':''}hover:bg-blue-50 rounded-full px-4 py-2 capitalize`}>{cat?.label} </Link>
          )
        })}
    
      </nav>
      <span className='text-xl font-medium'>|</span>
      <Search/>
     
    </div>
  )
}

export default MainCategories
