import NotificationCard from "@/components/NotificationCard"

const page = () => {
   return (
      <div className='w-full p-3 lg:p-0 mb-14 md:mb-0'>
         <div className="flex justify-between mb-8 md:mb-10">
            <h3 className='font-semibold text-2xl md:text-3xl  text-white '>All Notifications</h3>
            <div className=" w-fit bg-cs200 p-2 grid items-center grid-cols-2 gap-2 rounded-xl">
               <span className="block bg-cp500 text-cs200 px-3 py-1 text-md text-center font-medium rounded-lg cursor-pointer">Calls</span>
               <span className="block text-cp500 text-md text-center font-medium whitespace-nowrap  cursor-pointer">Others</span>
            </div>
         </div>
         <div className="grid gap-3 md:gap-4">
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
            <NotificationCard/>
         </div>
      </div>
   )
}

export default page