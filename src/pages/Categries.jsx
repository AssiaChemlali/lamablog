import React from 'react'
import { CATEGORIES } from '../lib'
import { Link } from 'react-router'
const Categries = () => {
  return (
    <ul className='flex flex-col gap-3'>
    {CATEGORIES.map((cat,index)=>{
      return(
         <Link to={cat.href} className='underline capitalize font-semibold text-sm' key={index}>
        {cat.label}
        </Link>
      )
    })}
   
  </ul>
  )
}

export default Categries
