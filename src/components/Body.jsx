import React from 'react'

export default function Body() {
  return (
    <div className='flex max-w-7xl mx-auto items-center h-[calc(100vh-72px)]'>
        <div className='flex flex-col gap-[36px]'>
            <h1 className=' text-[108px] font-extrabold leading-[102px] '>YOUR FEET DESERVE THE BEST</h1>
           
            <p className='text-gray font-semibold text-[14px] mb-8 max-w-[400px]'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
       <div className='flex gap-[40px]'>
<button className='h-[32px] p-[5px] text-white rounded-lg bg-red-600 font-medium'>Shop Now</button>
<button className='h-[32px] p-[5px] text-gray rounded-lg bg-transparent font-medium border border-gray-500'>Category</button>
       </div>
       <div>
        <p>Also Available On</p>
        <div className='flex gap-4'>
        <img src="flipkart.png" alt="flipart-logo" />
        <img src="amazon.png" alt="amazon-logo" />
        </div>
       </div>
        </div>
        <div className='image'></div>
        <img src="shoe_image.png" alt="shoe-image" />
    </div>
  )
}
