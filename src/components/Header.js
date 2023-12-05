import Image from "next/image"
import Link from "next/link"

const Header = () => {
   return (
      <div className=' h-14 border-b border-b-cs300 sticky top-0 left-0 right-0 z-50 bg-cs100 p-3 md:p-0 mb-0 md:mb-10'>
         <div className=' h-auto md:h-14 max-w-screen-xl m-auto flex items-center'>
            <Link href="/" className=' font-semibold text-xl text-white'>marketFeed</Link>

            <div className='hidden lg:flex items-center gap-6 ml-12'>
               <div className='text-cs600 text-base font-normal cursor-pointer'>
                  <Link href="/feed">Feed</Link>
               </div>
               <div className='text-cs600 text-base font-normal cursor-pointer'>
                  <Link href="/mentors">Mentors</Link>
               </div>
               <div className='text-cs600 text-base font-normal cursor-pointer'>
                  <Link href="/mentor">Mentor</Link>
               </div>
               <div className='text-cs600 text-base font-normal cursor-pointer'>
                  <Link href="/calls">Calls</Link>
               </div>
               <div className='text-cs600 text-base font-normal cursor-pointer'>
                  <Link href="/subscription">Subscription</Link>
               </div>
               <div className='text-cs600 text-base font-normal cursor-pointer'>
                  <Link href="/membership">Membership</Link>
               </div>
               <div className='text-cs600 text-base font-normal cursor-pointer'>
                  <Link href="/performance">Performance</Link>
               </div>
               <div className='text-cs600 text-base font-normal cursor-pointer'>
                  <Link href="/notification">Notification</Link>
               </div>
               <div className='text-cs600 text-base font-normal cursor-pointer'>
                  <Link href="/events">Events</Link>
               </div>

            </div>

            <div className='flex items-center gap-6 ml-auto' >
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=' cursor-pointer'><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            </div>

            <div className="ml-6 cursor-pointer hidden lg:block">
               <Image
                  src="/dummy.webp"
                  width={30}
                  height={30}
                  alt=""
                  className='aspect-square object-cover rounded-full'
               />
            </div>
         </div>
      </div>
   )
}

export default Header