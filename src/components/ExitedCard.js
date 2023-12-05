import Image from 'next/image'
import React from 'react'

const ExitedCard = () => {
   return (
      <div className=' bg-elight-green rounded-xl p-3'>
         <div className='bg-white rounded-xl p-4 mb-4'>
            <div className='flex items-center gap-4 mb-2'>
               <div className='w-12 h-12 flex items-center justify-center  rounded-lg bg-elight-green aspect-square'>
                  <Image
                     src="/feather.svg"
                     width={20}
                     height={20}
                     alt=""
                  />
               </div>
               <span className=' text-lg font-semibold uppercase'>Motilalofs</span>
            </div>
            <span className='block text-2xl font-bold'>₹960</span>
            <span className='block opacity-70 mb-3 text-xs'>Recommended Price</span>

            <div className='flex justify-between pb-2 border-b mb-2 text-sm font-normal'>
               <span className='text-lblue font-medium opacity-60'>% Return</span>
               <span className='font-semibold text-light-green'>9.40%</span>
            </div>
            <div className='flex justify-between text-sm'>
               <span className='text-lblue font-medium opacity-60'>Duration</span>
               <span className='font-medium'>19 Days</span>
            </div>
         </div>
         <div className='flex justify-between text-sm pb-2 mr-4 ml-4 border-b border-b-[#bad1cb] mb-2'>
            <span className='text-lblue font-medium opacity-60'>Date of recommendation</span>
            <span className='font-medium text-text-blue'>12 Oct 2023</span>
         </div>
         <div className='flex justify-between text-sm pb-2 mr-4 ml-4 border-b border-b-[#bad1cb] mb-2'>
            <span className='text-lblue font-medium opacity-60'>Sell Price</span>
            <span className='font-medium text-text-blue'>₹1,051</span>
         </div>
         <div className='flex justify-between text-sm pb-2 mr-4 ml-4 border-b border-b-[#bad1cb] mb-2'>
            <span className='text-lblue font-medium opacity-60'>Sell Date</span>
            <span className='font-medium text-text-blue'>31 Oct 2023</span>
         </div>
         <div className='flex justify-between text-sm mr-4 ml-4'>
            <span className='text-lblue font-medium opacity-60'>Annual Returns</span>
            <span className='font-medium text-text-blue'>181%</span>
         </div>
      </div>
   )
}

export default ExitedCard