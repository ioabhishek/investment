import FinflueCard from "@/components/FinflueCard";

export default function Home() {
   return(
      <div className='w-full p-3 lg:p-0 mb-14 md:mb-0'>
         <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-10">
            <h3 className='font-semibold text-3xl text-white mb-8 md:mb-0'>Mentors</h3>
            <div className="relative w-full md:w-fit text-gray-600 focus-within:text-gray-400">
               <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </button>
               </span>
               <input type="search" name="q" className="py-2 w-full md:w-fit h-10 text-sm text-white bg-cs200 rounded-xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..."/>
            </div>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4'>
            <FinflueCard/>
            <FinflueCard/>
            <FinflueCard/>
            <FinflueCard/>
            <FinflueCard/>
            <FinflueCard/>
            <FinflueCard/>
            <FinflueCard/>
         </div>
      </div>
   )
}