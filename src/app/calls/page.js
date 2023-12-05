import CallsCard from "@/components/CallsCard";

export default function Home() {
   return(
      <div className='w-full p-3 lg:p-0 mb-14 md:mb-0'>
         <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-10">
            <div className=" w-full md:w-[300px] md:max-w-[300px] bg-cs200 p-2 grid grid-cols-2 items-center gap-2 rounded-xl  mb-3 md:mb-0">
               <span className="block bg-cp500 text-cs100 px-3 py-1 text-md text-center font-medium rounded-lg cursor-pointer">By Type</span>
               <span className="block text-cp500 text-md text-center font-medium whitespace-nowrap  cursor-pointer">By Influencer</span>
            </div>

            <div className=" w-full md:w-fit relative text-gray-600 focus-within:text-gray-400">
               <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </button>
               </span>
               <input type="search" name="q" className=" w-full md:w-fit py-2 h-10 text-sm text-white bg-cs200 rounded-xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..."/>
            </div>
         </div>
         <div className='grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4'>
            <CallsCard image="feather.svg" label="Index calls" />
            <CallsCard image="feather.svg" label="Equity Intr" />
            <CallsCard image="feather.svg" label="EQ Short T" />
            <CallsCard image="feather.svg" label="EQ Long T" />
            <CallsCard image="feather.svg" label="Future Call" />
            <CallsCard image="feather.svg" label="IPO" />
            <CallsCard image="feather.svg" label="MF" />
            <CallsCard image="feather.svg" label="Portfolio Health" />
            <CallsCard image="feather.svg" label="Other" />
         </div>
      </div>
   )
}