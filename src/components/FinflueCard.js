import Image from "next/image"

const FinflueCard = () => {
   return (
      <div className=' bg-cs200 rounded-xl cursor-pointer'>
         <div className=' bg-cs300 rounded-xl p-3 flex items-center' >
            <Image
               src="/dummy.webp"
               width={50}
               height={50}
               alt=""
               className=" w-10 aspect-square object-cover rounded-full mr-2"
            />
            <span className=" text-white font-medium text-md">Mitesh Thakkar</span>
            <div className=" ml-auto">
               <span className=" bg-cp300  px-2 py-1 rounded-lg text-xs font-semibold text-cs100">60%</span>
            </div>
         </div>

         <div className="p-3">
            <p className="text-white text-sm font-normal mb-3 ">Lorem ipsum dolor, sit amet consectetur adip isicing elit. Et, minus nisi magnam asperiores voluptatum temporibus.</p>
            <p className="text-white text-sm mb-3"><span className="font-semibold">Experience - </span>15 Years</p>
            <p className="text-white text-sm mb-3">English, Hindi, Assamese, Telugu, Tamil, Marathi, Kannada</p>
            <div className="flex items-center justify-between mb-3">
               <p className="text-white text-sm font-semibold">Practice areas & skills:</p>
               <span className="bg-cp300  px-2 py-1 rounded-lg text-xs font-semibold text-cs100">Subscribed</span>
            </div>
            <div className="flex flex-wrap gap-1">
               <span className="bg-cs300  px-2 py-1 rounded-lg text-xs font-regular text-cp500">Stocks</span>
               <span className="bg-cs300  px-2 py-1 rounded-lg text-xs font-regular text-cp500">BankNifty Options</span>
               <span className="bg-cs300  px-2 py-1 rounded-lg text-xs font-regular text-cp500">Nifty Options</span>
               <span className="bg-cs300  px-2 py-1 rounded-lg text-xs font-regular text-cp500">+4 more</span>
            </div>
         </div>
      </div>
   )
}

export default FinflueCard