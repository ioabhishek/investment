import CallByCard from '@/components/CallByCard'
import PositionCard from '@/components/PositionCard'

const page = () => {
   return (
      <div className='w-full p-3 lg:p-0 mb-14 md:mb-0'>
         {/* Select Segment */}
         <div className="flex justify-between items-center mb-8 md:mb-10">
            <select className='h-10 rounded-lg md:rounded-xl px-3 bg-cs200 text-white text-base' >
               <option value="">Banknifty</option>
               <option value="">Nifty</option>
               <option value="">Stocks</option>
            </select>
         </div>

         {/* Active Calls */}
         <h3 className='font-semibold text-2xl md:text-3xl  text-white mb-5 md:mb-5'>My Active Calls</h3>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-3 mb-8 md:mb-10">
            <PositionCard/>
            <PositionCard/>
            <PositionCard/>
            <PositionCard/>
         </div>

         {/* Selected Calls */}
         <h3 className='font-semibold text-2xl md:text-3xl  text-white mb-5 md:mb-5'>Selected Calls</h3>
         <div className='grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-3 mb-8 md:mb-10'>
            <CallByCard/>
            <CallByCard/>
            <CallByCard/>
            <CallByCard/>
         </div>

         {/* All Calls */}
         <h3 className='font-semibold text-2xl md:text-3xl  text-white mb-5 md:mb-5'>All Calls</h3>
         <div className='grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-3'>
            <CallByCard/>
            <CallByCard/>
            <CallByCard/>
            <CallByCard/>
            <CallByCard/>
            <CallByCard/>
            <CallByCard/>
            <CallByCard/>
         </div>
      </div>
   )
}

export default page