import React from 'react'
import Search from './Search'
import Categries from '../pages/Categries'
const SideMenu = () => {
  return (
    <div className='w-full flex flex-col gap-6  lg:sticky lg:top-8 lg:h-max'>
    {/* search */}
    <div className='flex flex-col'>
      <h5 className='font-bold capitalize mb-2 text-sm'>search</h5>
      <Search/>
    </div>

    {/* filters */}
    <div className='flex flex-col'>
      <h5 className='font-bold capitalize mb-2 text-sm'>  Filters</h5>
     <div className='flex flex-col gap-3'>
      <label className='capitalize ' htmlFor=''>
        <input 
        type="checkbox"
         
        className='mr-2 appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800 bg-white ' 
        value="newest"
        name="sort" 
        />newset</label>

        <label className='capitalize ' htmlFor=''>
        <input type="checkbox"  className='mr-2 appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800 bg-white'
         value="mostpopular"
         name="sort" />most popular</label>

        <label className='capitalize ' htmlFor=''>
        <input type="checkbox"  className='mr-2 appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800 bg-white'
         value="trending"
         name="sort" />trending</label>

        <label className='capitalize ' htmlFor=''>
        <input type="checkbox"  className='mr-2 appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800 bg-white'
         value="oldest"
         name="sort" />oldest</label>
     </div>
    </div>


    {/* categories */}
    <div className='flex flex-col'>
      <h5 className='font-bold capitalize mb-2 text-sm'>categories</h5>
      <Categries/>
    </div>

  </div>
  )
}

export default SideMenu
