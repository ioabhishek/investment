import Image from "next/image"
import { useState } from "react"

const PerformanceCard = ({showItems, setShowIndex}) => {
   const [isAccordionOpen, setAccordionOpen] = useState(false);

   const toggleAccordion = () => {
      setAccordionOpen(!isAccordionOpen);
   };

   return (
      <div className='bg-cs200 rounded-xl'>
         <div className=' bg-cs300 rounded-xl p-3 md:p-4 flex items-center cursor-pointer' onClick={toggleAccordion} >
            <Image
               src="/dummy.webp"
               width={36}
               height={36}
               alt=""
               className=" w-9 aspect-square object-cover rounded-full mr-2"
            />
            <span className=" flex items-center gap-2 md:gap-3 text-white font-medium md:font-semibold text-base md:text-lg">
               Mitesh Thakkar
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </span>
            <div className=" ml-auto">
               <span className=" text-sm md:text-base font-medium text-cp300">Paid</span>
            </div>
         </div>
         {
            isAccordionOpen && <div className=" p-3 md:p-4 ">
               <h3 className="text-white text-sm md:text-base font-medium mb-1 md:mb-3">Performance</h3>
               <div className="flex items-center text-white text-sm md:text-base font-normal">Total Calls given this month <span className='block font-medium text-white ml-auto  mb-1 md:mb-2'>23</span></div>
               <div className='flex items-center text-white text-sm md:text-base font-normal'>Total calls you took <span className='block font-medium text-white ml-auto  mb-1 md:mb-2'>16</span></div>
               <div className='flex items-center text-white text-sm md:text-base font-normal'>PNL With Mitesh <span className='block font-medium text-cp400 ml-auto'>+₹46,430</span></div>
            </div>
         }
      </div>
   )
}

export default PerformanceCard