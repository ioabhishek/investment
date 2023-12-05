import EventCard from "@/components/EventCard"
import LiveEventCard from "@/components/LiveEventCard"

const page = () => {
   return (
      <div className='w-full p-3 lg:p-0 mb-14 md:mb-14'>
         {/* Live Events */}
         <h3 className='font-semibold text-2xl md:text-3xl  text-white mb-6 md:mb-8'>Live Events</h3>
         <div className="mb-8 md:mb-10">
            <LiveEventCard/>
         </div>

         {/* Normal Events */}
         <h3 className='font-semibold text-2xl md:text-3xl  text-white mb-6 md:mb-8'>Events</h3>
         <div className=" flex items-center flex-wrap gap-2 mb-6">
            <div className='text-white text-sm md:text-base px-4 py-1 md:px-6 md:py-2 border border-cs600 rounded-lg md:rounded-xl cursor-pointer'>Today</div>
            <div className='text-black text-sm md:text-base font-semibold px-4 py-1 md:px-6 md:py-2 border bg-cp500 border-cp500 rounded-lg md:rounded-xl  cursor-pointer'>Tomorrow</div>
            <div className='text-white text-sm md:text-base px-4 py-1 md:px-6 md:py-2 border border-cs600 rounded-lg md:rounded-xl cursor-pointer'>This week</div>
            <div  className='text-white text-sm md:text-base px-4 py-1 md:px-6 md:py-2 border border-cs600 rounded-lg md:rounded-xl cursor-pointer flex items-center gap-2'>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
               Choose from calender
            </div>
         </div>
         <div className="grid gap-3 md:gap-4">
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
         </div>
      </div>
   )
}

export default page