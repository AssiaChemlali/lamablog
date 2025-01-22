import React from 'react'
import Search from './Search'
import Categries from '../pages/Categries'
const SideMenu = () => {
  return (
    <div className='w-full flex flex-col gap-6 lg:w-1/5 sticky top-8 h-max'>
    {/* search */}
    <div className='flex flex-col'>
      <h5 className='font-bold capitalize mb-2'>search</h5>
      <Search/>
    </div>

    {/* filters */}
    <div className='flex flex-col'>
      <h5 className='font-bold capitalize mb-2'>  Filters</h5>
     <div className='flex flex-col gap-3'>
      <label className='capitalize '>
        <input type="checkbox"  className='mr-2'/>newset</label>

        <label className='capitalize '>
        <input type="checkbox"  className='mr-2'/>most popular</label>

        <label className='capitalize '>
        <input type="checkbox"  className='mr-2'/>trending</label>

        <label className='capitalize '>
        <input type="checkbox"  className='mr-2'/>oldest</label>
     </div>
    </div>


    {/* categories */}
    <div className='flex flex-col'>
      <h5 className='font-bold capitalize mb-2'>categories</h5>
      <Categries/>
    </div>

  </div>
  )
}

export default SideMenu
