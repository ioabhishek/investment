import Image from 'next/image'
import React from 'react'

const DashboardCard = ({number, label, image}) => {
   return (
      <div className=' shadow-md rounded-lg p-5 flex flex-col items-center cursor-pointer'>
         {
            number && <span className='w-12 h-12 flex items-center justify-center text-xl font-medium rounded-md bg-elight-green aspect-square mb-2'>{number}</span>
         }
         { image && 
            <div className='w-12 h-12 flex items-center justify-center  rounded-lg bg-elight-green aspect-square mb-2'>
               <Image
                  src="/feather.svg"
                  width={20}
                  height={20}
                  alt=""
               />
            </div>
         }
         <span className='block rounded-md font-medium'>{label}</span>
      </div>
   )
}

export default DashboardCard