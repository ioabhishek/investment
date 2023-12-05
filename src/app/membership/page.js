import SubscriptionCard from "@/components/SubscriptionCard"
import Image from "next/image"


const page = () => {
   return (
      <div className='w-full block md:flex gap-6 '>
         <div className=''>
            {/* Title */}
            <div className=' w-full h-fit bg-cs200 p-3 md:p-5 rounded-xl mb-5 md:mb-6'>
               <h2 className=' text-3xl md:text-4xl font-medium mb-3'>Daily Intraday Calls</h2>
               <div className='flex items-center gap-6'>
                  <div className='flex items-center gap-2 text-sm md:text-base text-cs600'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                     4.9 Ratings
                  </div>
                  <div className='flex items-center gap-2 text-sm md:text-base text-cs600'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                     Investment & Trading
                  </div>
               </div>
            </div>

            {/* Creator  */}
            <div className='hidden flex items-center gap-8 border border-cs400 p-5 rounded-xl mb-8'>
               <Image
                  src="/dummy.webp"
                  width={96}
                  height={96}
                  alt=""
                  className='aspect-square w-24 h-24 object-cover rounded-xl'
               />
               <div className=" w-full flex items-center justify-between gap-10 pr-10">
                  <div className="">
                     <span className="text-cs600 text-xs">Created by</span>
                     <h3 className=" text-cp400 text-2xl font-semibold mb-4">INTRADAY MATCH <br /> SEBI REGISTER</h3>
                     <div className=" text-base font-medium max-w-fit flex items-center gap-2 bg-cs200 rounded-lg pr-2" >
                        <span className="flex items-center gap-1 text-cs100  bg-cp200 rounded-lg px-2 py-1 ">
                           SEBI
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        </span>
                        INH000011954
                     </div>
                  </div>
                  <div className="">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                     <div className=" text-base font-semibold mt-3  ">
                        5+ Years
                        <p className=" text-base font-normal">Experience</p> 
                     </div>
                  </div>
                  <div className="">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                     <div className=" text-base font-semibold mt-3  ">
                        10K+
                        <p className=" text-base font-normal">Followers</p> 
                     </div>
                  </div>
               </div>
            </div>

            {/* About */}
            <div className=" mb-8 flex flex-col md:flex-row gap-3 md:gap-5">
               <div className=" w-full md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-medium mb-5 md:mb-6">About membership -</h2>
                  <div className=" flex items-center flex-wrap gap-2 mb-4 md:mb-6">
                     <span className="bg-cs200 px-2 py-1 text-sm md:text-base rounded-lg">Technical Analysis</span>
                     <span className="bg-cs200 px-2 py-1 text-sm md:text-base rounded-lg">Risk Management</span>
                     <span className="bg-cs200 px-2 py-1 text-sm md:text-base rounded-lg">Market Analysis</span>
                     <span className="bg-cs200 px-2 py-1 text-sm md:text-base rounded-lg">Trading Strategies</span>
                  </div>
                  <p className="text-cp700 text-base font-normal mb-4">Unlock Comprehensive Market Mastery with Our Premium Service!</p>
                  <p className="text-cp700 text-base font-normal mb-4">Navigate the financial terrain with unmatched clarity. Our service is tailored for discerning investors and traders looking to stay ahead in an ever-evolving market. </p>
                  <p className="text-cp700 text-base font-normal mb-4">What Do We Offer?</p>
                  <p className="text-cp700 text-base font-normal">
                     1. Daily Market Analysis: Kickstart each trading day armed with a detailed breakdown of market dynamics. <br />
                     2. Trading Insights: Unearth hidden gems and strategies that can set you apart in the trading arena. <br />
                     3. Risk Analysis: Safeguard your investments with our rigorous risk assessment, ensuring you make informed decisions. <br />
                     4. Real-Time Trend Updates: Stay ahead of the curve with instantaneous updates, ensuring you never miss a market beat. <br />
                     5. Trend Analysis: Dive deep into market trajectories with our robust trend analyses. <br />
                     6. Market Forecasting: Harness the power of predictive analytics to anticipate market moves, providing you with a strategic edge. <br />
                     Embark on a transformative trading journey. With our premium offerings, you're not just observing the market; you're mastering it. Stay informed, stay ahead, and let every trading move be a step towards unparalleled success.
                  </p>
               </div>
               <div className=" w-full md:w-1/3">
                  <h2 className="text-2xl md:text-3xl font-medium mb-5 md:mb-6">What's Included?</h2>
                  <div className="grid gap-3">
                     <div className="bg-cs200 px-3 py-2 rounded-xl">
                        <span className="text-2xl font-bold text-cp200 mr-2">1</span>
                        <span className=" text-lg ">Daily Market Analysis</span>
                     </div>
                     <div className="bg-cs200 px-3 py-2 rounded-xl">
                        <span className="text-2xl font-bold text-cp200 mr-2">2</span>
                        <span className=" text-lg ">Trading Insights</span>
                     </div>
                     <div className="bg-cs200 px-3 py-2 rounded-xl">
                        <span className="text-2xl font-bold text-cp200 mr-2">3</span>
                        <span className=" text-lg ">Risk Analysis</span>
                     </div>
                     <div className="bg-cs200 px-3 py-2 rounded-xl">
                        <span className="text-2xl font-bold text-cp200 mr-2">4</span>
                        <span className=" text-lg ">Market Updates</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Benefits */}
            <div className=" hidden mb-8">
               <h2 className="text-3xl font-medium mb-6">Top 4 Benefits From This Subscription</h2>
               <div className="grid grid-cols-4 gap-3 md:gap-4">
                  <div className="bg-cs200 p-6 rounded-xl">
                     <div className="text-5xl font-bold text-cp200 mb-2">1</div>
                     <span className=" text-xl ">Daily Market Analysis</span>
                  </div>
                  <div className="bg-cs200 p-6 rounded-xl">
                     <div className="text-5xl font-bold text-cp200 mb-2">2</div>
                     <span className=" text-xl ">Trading Insights</span>
                  </div>
                  <div className="bg-cs200 p-6 rounded-xl">
                     <div className="text-5xl font-bold text-cp200 mb-2">3</div>
                     <span className=" text-xl ">Risk Analysis</span>
                  </div>
                  <div className="bg-cs200 p-6 rounded-xl">
                     <div className="text-5xl font-bold text-cp200 mb-2">4</div>
                     <span className=" text-xl ">Market Updates</span>
                  </div>
               </div>
            </div>

            {/* More */}
            <div className="hidden">
               <h3 className='font-semibold text-2xl md:text-3xl  text-white mb-5 md:mb-5'>More from Manish Thakkar</h3>
               <div className='w-full flex md:grid grid-cols-3 gap-3 md:gap-4 overflow-x-scroll md:overflow-x-hidden'>
                  <SubscriptionCard/>
                  <SubscriptionCard/>
                  <SubscriptionCard/>
               </div>
            </div>
         </div>

         {/* Plans */}
         <div className=' min-w-full max-w-full md:min-w-[300px] md:max-w-[300px] mb-6'>
            <h2 className="text-2xl md:text-3xl font-medium mb-5 md:mb-6">Subscription Plans</h2>
            <div className="bg-cs200 rounded-xl">
               <Image
                  src="/dummy.webp"
                  width={300}
                  height={250}
                  alt=""
                  className=' aspect-video w-full md:w-[300] h-auto object-cover rounded-t-xl'
               />
               <div className="p-4 ">
                  <div className="flex flex-col gap-3">
                     <div class="relative pointer-events-auto flex flex-col rounded-xl last:mb-1 border-grays-200 px-3 py-2 gap-y-2 cursor-pointer  bg-cs300">
                        <div class=" flex items-center gap-x-2">
                           <input type="radio" class=" w-4 h-4 accent-cp600" />
                           <div class="font-primary font-semibold text-sm leading-4 text-white">1 Month Access </div>
                        </div>
                        <div class=" flex justify-between items-center gap-x-1 pl-6">
                           <div class="flex items-center gap-x-1 ">
                              <h3 class="font-primary font-semibold text-base text-cp600">₹5,000</h3>
                           </div>
                        </div>
                     </div>

                     <div class="relative pointer-events-auto flex flex-col rounded-xl last:mb-1 border-grays-200 px-3 py-2 gap-y-2 cursor-pointer  bg-cs300">
                        <div class=" flex items-center gap-x-2">
                           <input type="radio" class=" w-4 h-4 accent-cp600" />
                           <div class="font-primary font-semibold text-sm leading-4 text-white">1 Month Access </div>
                        </div>
                        <div class=" flex justify-between items-center gap-x-1 pl-6">
                           <div class="flex items-center gap-x-1 ">
                              <h3 class="font-primary font-semibold text-base text-cp600">₹5,000</h3>
                           </div>
                        </div>
                     </div>

                     <div class="relative pointer-events-auto flex flex-col rounded-xl last:mb-1 border-grays-200 px-3 py-2 gap-y-2 cursor-pointer  bg-cs300">
                        <div class=" flex items-center gap-x-2">
                           <input type="radio" class=" w-4 h-4 accent-cp600" />
                           <div class="font-primary font-semibold text-sm leading-4 text-white">1 Month Access </div>
                        </div>
                        <div class=" flex justify-between items-center gap-x-1 pl-6">
                           <div class="flex items-center gap-x-1 ">
                              <h3 class="font-primary font-semibold text-base text-cp600">₹5,000</h3>
                           </div>
                        </div>
                     </div>

                     <div class="relative pointer-events-auto flex flex-col rounded-xl last:mb-1 border-grays-200 px-3 py-2 gap-y-2 cursor-pointer  bg-cs300">
                        <div class=" flex items-center gap-x-2">
                           <input type="radio" class=" w-4 h-4 accent-cp600" />
                           <div class="font-primary font-semibold text-sm leading-4 text-white">1 Month Access </div>
                        </div>
                        <div class=" flex justify-between items-center gap-x-1 pl-6">
                           <div class="flex items-center gap-x-1 ">
                              <h3 class="font-primary font-semibold text-base text-cp600">₹5,000</h3>
                           </div>
                        </div>
                     </div>

                     <div class="relative pointer-events-auto flex flex-col rounded-xl last:mb-1 border-grays-200 px-3 py-2 gap-y-2 cursor-pointer  bg-cs300">
                        <div class=" flex items-center gap-x-2">
                           <input type="radio" class=" w-4 h-4 accent-cp600" />
                           <div class="font-primary font-semibold text-sm leading-4 text-white">1 Month Access </div>
                        </div>
                        <div class=" flex justify-between items-center gap-x-1 pl-6">
                           <div class="flex items-center gap-x-1 ">
                              <h3 class="font-primary font-semibold text-base text-cp600">₹5,000</h3>
                           </div>
                        </div>
                     </div>

                     <div className=" mt-3 w-full text-center text-base font-semibold text-cs100 bg-cp200 rounded-xl p-3 cursor-pointer">
                        Subscribe Now
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default page