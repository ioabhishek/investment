import React from 'react'

const Sidebar = () => {
   return (
      <div className='hidden h-fit lg:grid min-w-[300px] max-w-[300px] text-white gap-4 '>
         <div className='bg-cs200 p-4 rounded-xl'>
            <span>Market Action</span>
         </div>
         <div className='bg-cs200 p-4 rounded-xl'>
            <span>Global Markets</span>
         </div>
         <div className='bg-cs200 p-4 rounded-xl'>
            <span>Stock Action</span>
         </div>
         <div className='bg-cs200 p-4 rounded-xl'>
            <span>Most Active</span>
         </div>
         <div className='bg-cs200 p-4 rounded-xl'>
            <span>Top Gainers</span>
         </div>
         <div className='bg-cs200 p-4 rounded-xl'>
            <span>Top Loosers</span>
         </div>
      </div>
   )
}

export default Sidebar