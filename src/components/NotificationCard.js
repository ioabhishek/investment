import Image from "next/image"

const NotificationCard = () => {
   return (
      <div className='bg-cs200 rounded-xl p-3'>
         <div className="flex items-center">
            <Image
               src="/dummy.webp"
               width={50}
               height={50}
               alt=""
               className=" w-10 aspect-square object-cover rounded-full mr-2"
            />
            <div className="w-full">
               <p className=" text-white font-normal text-sm mb-1">New post about Design and Silicon Valley in your fee. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
               <p className=" text-cs600 font-normal text-xs">10:00 AM</p>
            </div>
         </div>
      </div>
   )
}

export default NotificationCard