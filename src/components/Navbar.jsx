
import React,{useState} from 'react'
import {IoMdMenu} from 'react-icons/io'
import { IoClose } from "react-icons/io5";
import {links} from '../lib/index.js'
import { Link } from "react-router";
import Image from './Image.jsx';
const Navbar = () => {

  const [open,setOpen]=useState(false)
  return (
    <>
    
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>

      <Link 
        to="."
        className='flex items-center gap-4 text-2xl font-bold'>
        <Image path="assets/logo.png" className="w-8 h-8"/>
        <span >Lamalog</span>
      </Link>

      {/* desktop menu */}
      <nav className='hidden md:flex  items-center gap-8 xl:gap-12 font-medium capitalize text-lg'>
          {links.map((link,index)=>{
              return(
                <div 
                key={index} 
                className='flex items-center'>
                    <Link 
                    to={link.href} 
                    key={index}>
                    {link.label}
                  </Link>
                </div>
              )
            })}
            <Link 
              className='py-2 px-4 rounded-full bg-blue-800 text-white '
              to="/login" >login 👋</Link>

      </nav>

      <div className='md:hidden cursor-pointer text-2xl ' 
        onClick={()=>setOpen(prev=>!prev)}>
        {open ? <IoClose />:<IoMdMenu />}
        </div>

    </div>


      {/* mobile menu */}
      <div className='md:hidden '>
        {
        open &&
          (
          <nav className='w-full h-screen transition-all ease-in-out  flex items-center flex-col capitalize font-medium font-sm '>
          {links.map((link,index)=>{
              return(
                <div 
                key={index} 
                className='flex items-center  py-3 justify-center'>
                    <Link 
                      to={link.href} 
                      key={index}>
                      {link.label}
                  </Link>
                </div>
              )
            })}
             <Link 
              className='py-2 px-4 rounded-full bg-blue-800 text-white '
              to="/login" >login 👋</Link>

          </nav>
          )
        }

      </div>

    </>
    
  )
}

export default Navbar
