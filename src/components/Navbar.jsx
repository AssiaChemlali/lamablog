import React from 'react'
const [open,setOpen]=useState(false)
  const links=[
    {
      href:"/",
      label:"home"
    },
    {
      href:"/trending",
      label:"Trending"
    },
    {
      href:"/popular",
      label:"More Popular"
    },
    {
      href:"/about",
      label:"about"
    },
    {
      href:"/login",
      label:"login"
    },
  ]
  
const Navbar = () => {
  return (
    <div className='w-full h-16 md:h-20   flex  items-center justify-between'>
       <div className='flex items-center gap-4  text-2xl font-bold'>
        <img src="logo.png" alt=""  className='w-8 h-8'/>
        <span >Lamalog</span>
      </div>

       {/* desktop menu */}
       <nav className='hidden md:flex '>
           

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
