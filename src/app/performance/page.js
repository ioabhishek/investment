'use client'
import SubscriptionCard from "@/components/SubscriptionCard";
import PerformanceCard from "@/components/PerformanceCard";

const page = () => {

   return (
      <div className='w-full p-3 lg:p-0 mb-14 md:mb-0'>
         <div className=' bg-cs200 rounded-xl mb-8 md:mb-10'>
            <div className=' bg-cs300 text-cp300 text-lg md:text-xl font-semibold rounded-xl px-4 md:px-6 py-2 flex items-center'>
               Your Performance
            </div>
            <div className='px-4 md:px-6 py-2 md:py-4 w-full'>
               <div className='flex items-center text-white text-sm md:text-base font-normal'>Total calls you took <span className='block font-medium text-white ml-auto mb-2'>12</span></div>
               <div className='flex items-center text-white text-sm md:text-base font-normal'>Your PNL <span className='block font-medium text-cp400 ml-auto'>+₹46,430</span></div>
            </div>
         </div>
         <h3 className='font-semibold text-2xl md:text-3xl  text-white mb-6 md:mb-8'>Your Subscriptions</h3>
         <div className="grid gap-3 md:gap-4">
            <PerformanceCard/>
            <PerformanceCard/>
            <PerformanceCard/>
            <PerformanceCard/>
            <PerformanceCard/>
         </div>
      </div>
   )
}

export default page