
import React,{useState} from 'react'
import {IoMdMenu} from 'react-icons/io'
import {IoClose} from 'react-icons/io5'
import logo from "../assets/logo.png"
import {links} from '../lib/index.js'

import { Link } from "react-router";
const Navbar = () => {

  const [open,setOpen]=useState(false)
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>

       <div className='flex items-center gap-4 text-2xl font-bold'>
        <img src={logo} alt=""  className='w-8 h-8'/>
        <span >Lamalog</span>
      </div>

       {/* desktop menu */}
       <nav className='hidden sm:flex '>
          {links.map((link,index)=>{
              return(
                <div className='flex  items-center  px-2'>
                    <Link 
                    className='capitalize font-medium'
                    to={link.href} 
                    key={index}>
                    {link.label}
                  </Link>
                </div>
              )
            })}

       </nav>

       {/* mobile menu */}
       <div className=' md:hidden'>
         <div className='cursor-pointer text-2xl' 
          onClick={()=>setOpen(prev=>!prev)}>
          {open ? <IoClose />:<IoMdMenu />}
         </div>
          {open && 
              (
              <div className='bg-red-500 w-full'>
               

              </div>
              )
            }
         
       </div>
       
      
    </div>
  )
}

export default Navbar
