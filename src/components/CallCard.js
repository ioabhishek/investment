import Image from 'next/image'
import React from 'react'

const CallCard = ({image, label, count}) => {
   return (
      <div className=' bg-white rounded-lg flex flex-col items-center justify-center p-3'>
         <div className='w-12 h-12 flex items-center justify-center  rounded-lg bg-elight-green aspect-square mb-4'>
            <Image
               src="/feather.svg"
               width={20}
               height={20}
               alt=""
            />
         </div>
         <span className='block rounded-md text-md font-medium mb-1'>{label}</span>
      </div>
   )
}

export default CallCard