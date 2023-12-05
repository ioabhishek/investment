import CourseCard from "@/components/CourseCard"
import EventCard from "@/components/EventCard"
import SubscriptionCard from "@/components/SubscriptionCard"
import Image from "next/image"

const page = () => {
  return (
    <div className='w-full p-3 lg:p-0 mb-14 md:mb-14'>
      <div className='p-4 rounded-xl flex flex-col md:flex-row gap-6 bg-cs200 mb-8 md:mb-10'>
        <div>
          <Image
            src="/dummy.webp"
            width={200}
            height={200}
            alt=""
            className=' aspect-square w-[100px] md:w-[200px] h-auto object-cover rounded-xl'
          />
        </div>
        <div>
          <div className="mb-4">
            <h2 className=" text-2xl font-semibold mb-2">Mohit Agarwal <span className="text-sm text-cs600 font-normal mb-2">(From Finterest Capitals)</span></h2>
            <div className=" text-xs font-normal max-w-fit flex items-center gap-2 bg-cs300 rounded-md pr-2" >
              <span className="flex items-center gap-1 text-cs100 text-xs font-medium  bg-cp500 rounded-md px-1 py-0 ">
                  SEBI
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              INH000011954
            </div>
          </div>
          <div className="mb-4">
            <p className="text-sm font-normal text-cs600 mb-1">Specialises in -</p>
            <div className=" flex items-center flex-wrap gap-2">
              <span className="text-sm font-normal bg-cs300 px-2 py-1 rounded-lg">Technical Analysis</span>
              <span className="text-sm font-normal bg-cs300 px-2 py-1 rounded-lg">Risk Management</span>
              <span className="text-sm font-normal bg-cs300 px-2 py-1 rounded-lg">Market Analysis</span>
              <span className="text-sm font-normal bg-cs300 px-2 py-1 rounded-lg">Trading Strategies</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-start gap-5 md:gap-20">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#908d93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              <div className=" text-base text-cs600 font-semibold">
                Investment & Trading
                <p className=" text-sm text-cs600 font-normal">Expert</p> 
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#908d93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              <div className=" text-base text-cs600 font-semibold">
                5+ Years
                <p className=" text-sm text-cs600 font-normal">Experience</p> 
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#908d93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              <div className=" text-base text-cs600 font-semibold">
                10K+
                <p className=" text-sm text-cs600 font-normal">Followers</p> 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Mentor */}
      <div className="mb-8 md:mb-10">
        <h3 className='font-semibold text-2xl md:text-3xl  text-white mb-5 md:mb-5'>About Mentor</h3>
        <div className="">

        </div>
      </div>

      {/* Memberships */}
      <div className="mb-8 md:mb-10">
        <h3 className='font-semibold text-2xl md:text-3xl  text-white mb-5 md:mb-5'>Memberships</h3>
        <div className="w-full flex md:grid grid-cols-4 overflow-x-scroll md:overflow-x-hidden md:grid-cols-4 gap-3 md:gap-4">
          <SubscriptionCard/>
          <SubscriptionCard/>
          <SubscriptionCard/>
          <SubscriptionCard/>
        </div>
      </div>

      {/* Courses */}
      <div className="mb-8 md:mb-10">
        <h3 className='font-semibold text-2xl md:text-3xl  text-white mb-5 md:mb-5'>Courses</h3>
        <div className="w-full flex md:grid grid-cols-1 overflow-x-scroll md:overflow-x-hidden md:grid-cols-4 gap-3 md:gap-4">
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </div>
      </div>

      {/* Events */}
      <div className="mb-8 md:mb-10">
        <h3 className='font-semibold text-2xl md:text-3xl  text-white mb-5 md:mb-5'>Events</h3>
        <div className="w-full flex md:grid grid-cols-1 overflow-x-scroll md:overflow-x-hidden md:grid-cols-4 gap-3 md:gap-4">
          <EventCard/>
          <EventCard/>
        </div>
      </div>

      <div className="mb-8 md:mb-10">
        <hr className= " border-b border-b-cs400 bg-cs400 mb-8 md:mb-10"/>
        <div className=" bg-cs200 p-4 rounded-xl">
          <div className=" block md:grid grid-cols-2 gap-3 md:gap-5 mb-4">
            <div className=" mb-4 md:mb-0">
              <h2 className=" text-2xl font-semibold mb-2">Mohit Agarwal</h2>
              <p>SR-TF-03,3rd Floor Shree Siddheshwar Hall Mark, Ajwa Road, VADODARA, GUJARAT, 390019</p>
            </div>
            <p >
              Registration granted by SEBI, membership of BASL (in case of IAs) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of return to investors
            </p>
          </div>
          <p className=" text-sm text-cs600">
            Disclaimer : Investing in Stocks/ETFs (Exchange Traded Funds) are subject to market risks. Read all the related documents before investing. Investors should consider all risk factors and consult their financial advisor before investing
          </p>
        </div>
      </div>
    </div>
  )
}

export default page