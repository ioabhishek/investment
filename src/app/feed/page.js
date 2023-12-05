
import Image from 'next/image'

export default function Home() {
   return (
      <div className='w-full flex gap-6 p-3 lg:p-0 mb-14 md:mb-14'>
         <div className='min-w-[300px] max-w-[300px] text-white hidden lg:block'>
            <div className=" w-full bg-cs200 p-2 grid items-center grid-cols-2 rounded-xl mb-3 md:mb-4">
               <span className="block bg-cp500 text-cs200 px-3 py-1 text-md text-center font-medium rounded-lg cursor-pointer">By Type</span>
               <span className="block text-cp500 text-md text-center font-medium whitespace-nowrap  cursor-pointer">By Influencer</span>
            </div>
            <div className=" w-full bg-cs200 p-2 grid items-center grid-cols-2 rounded-xl mb-8 md:mb-10">
               <span className="block bg-cp500 text-cs200 px-3 py-1 text-md text-center font-medium rounded-lg cursor-pointer">Free</span>
               <span className="block text-cp500 text-md text-center font-medium whitespace-nowrap  cursor-pointer">Paid</span>
            </div>
         </div>
         <div className='w-full grid gap-3 md:gap-4'>
            <div className=' bg-cs200 h-fit p-3 md:p-4 rounded-xl  cursor-pointer'>
               <div className='flex gap-3 md:gap-4'>
                  <Image
                     src="/dummy.webp"
                     width={40}
                     height={40}
                     alt=""
                     className='aspect-square w-10 h-10 object-cover rounded-full'
                  />
                  <div className='w-full '>
                     <div className='flex justify-between'>
                        <div className='flex flex-col'>
                           <span className='text-white font-medium text-base md:text-xl'>Gina Davi</span>
                           <span className='text-cs600 font-normal text-xs md:text-xs mb-[3px]'>10:30 AM</span>
                        </div>
                        <div className='text-sm bg-cs400 h-fit px-3 py-1 rounded-lg'>Subscribe</div>
                     </div>
                     <div className=' text-cs600 font-normal text-sm leading-6'>
                        BHARTI AIRTEL: BHARTI TELECOM ACQUIRES 1.35% OF CO SHARES FROM INDIAN CONTINENT INVESTMENT LIMITED FOR RUPEES 8,301.73 CR IN A BLOCK DEAL ON NSE 
                     </div>
                     <div className='flex items-center justify-between  mt-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#908d93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#908d93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#908d93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#908d93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                     </div>
                  </div>
               </div>
            </div>

            <div className=' bg-cs200 h-fit p-3 md:p-4 rounded-xl  cursor-pointer'>
               <div className='flex gap-3 md:gap-4'>
                  <Image
                     src="/dummy.webp"
                     width={40}
                     height={40}
                     alt=""
                     className='aspect-square w-10 h-10 object-cover rounded-full'
                  />
                  <div className='w-full '>
                     <div className='flex justify-between'>
                        <div className='flex flex-col'>
                           <span className='text-white font-medium text-base md:text-xl'>Gina Davi</span>
                           <span className='text-cs600 font-normal text-xs md:text-xs mb-[3px]'>10:30 AM</span>
                        </div>
                        <div className='text-sm bg-cs400 h-fit px-3 py-1 rounded-lg'>Subscribe</div>
                     </div>
                     <div className=' text-cs600 font-normal text-sm leading-6 mb-2'>
                        BHARTI AIRTEL: BHARTI TELECOM ACQUIRES 1.35% OF CO SHARES FROM INDIAN CONTINENT INVESTMENT LIMITED FOR RUPEES 8,301.73 CR IN A BLOCK DEAL ON NSE 
                     </div>
                     <Image
                        src="/chart.png"
                        width={1280}
                        height={720}
                        alt=""
                        className='w-[100%] h-[auto] object-cover rounded-lg'
                     />
                     <div className='flex items-center justify-between px-2 mt-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#908d93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#908d93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#908d93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#908d93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}
