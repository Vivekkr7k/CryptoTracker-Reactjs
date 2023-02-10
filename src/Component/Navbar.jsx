import React from 'react'
import { LogoIcon } from '../icons/icons'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const BacktoHome= useNavigate();
  return (
    <div className='bg-gradient-to-r from-neutral-900 to-orange-300 shadow-100xl text-indigo-50 h-16 flex items-center rounded-full mx-20 mb-10'>
       <div className='wrapper-container w-full'>
         <div className='flex items-center gap-1 cursor-pointer' onClick= {()=>BacktoHome('/')}>
             <LogoIcon className='h-8 w-8 ' />
              <p>
                <span className='text-yellow-300'>C</span><span>rypto</span>
                <span className='text-yellow-500'>T</span><span>racker</span>
              </p>
         </div>
       </div>
    </div>
  )
}

export default Navbar
