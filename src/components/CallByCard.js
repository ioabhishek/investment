import Image from "next/image"

const CallByCard = () => {
   return (
      <div className='bg-cs200 rounded-xl'>
         <div className=" flex items-start p-3">
            <Image
               src="/dummy.webp"
               width={50}
               height={50}
               alt=""
               className=" w-10 aspect-square object-cover rounded-full mr-2"
            />
            <div className="">
               <p className=" text-white font-medium text-base">Mitesh Thakkar</p>
               <p className=" text-cs600 font-normal text-xs">For Index Options</p>
            </div>
            <span className=" text-white font-normal text-xs ml-auto pt-1">Jun 10, 9:20</span>
         </div>

         <div className="ml-14 mb-2">
            <p className="text-white text-sm font-normal"><span className=" text-white font-semibold">BUY </span>BANKNIFTY 43300 PE</p>
            <p className="text-white text-sm font-normal"><span className=" text-white font-semibold">BUY </span>Zone 170-190</p>
            <p className="text-white text-sm font-normal"><span className=" text-white font-semibold">SL </span>140-145</p>
            <p className="text-white text-sm font-normal"><span className=" text-white font-semibold">Target </span>230-240</p>
         </div>

         <div className=' bg-cs300 rounded-xl p-3 flex items-center' >
            <div className=" w-full flex justify-between items-center">
               <div className="flex items-center gap-4 ">
            
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#908d93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#908d93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#908d93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>

               </div>
               <span className="bg-cp300 block  px-2 py-1 rounded-lg text-xs font-semibold text-cs100">Subscribed</span>
            </div>
         </div>
      </div>
   )
}

export default CallByCard