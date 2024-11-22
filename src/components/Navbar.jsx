import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='flex justify-between max-w-7xl mx-auto h-[72px] items-center'>
            <div>
                <img className='w-19 h-11' src="brand_logo.png" alt="" />
            </div>
            <ul className='flex gap-[24px] ml-8 '>
                <li className='font-medium'>Menu</li>
                <li className='font-medium'>Location</li>
                <li className='font-medium'>About</li>
                <li className='font-medium'>Contact</li>
            </ul>
            <button className='h-[32px] p-[5px] text-white rounded-lg bg-red-600 font-medium'>Login</button>
        </nav>
    </div>
  )
}
