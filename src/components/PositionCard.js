import Image from "next/image"

const PositionCard = () => {
   return (
      <div className='bg-cs200 rounded-xl p-3'>
         <div className="flex items-start mb-4">
            <Image
               src="/dummy.webp"
               width={50}
               height={50}
               alt=""
               className=" w-10 aspect-square object-cover rounded-full mr-2"
            />
            <div className="w-full">
               <span className=" text-white font-normal text-xs">Recommended by</span>
               <p className=" text-white font-medium text-base">Mitesh Thakkar</p>
            </div>
         </div>
         <div className="w-full">
            <p className=" text-white font-normal text-sm flex border-b border-b-cs300 pb-1 mb-1">Buy <span className="ml-auto font-medium block">Banknifty 43300 PE</span></p>
            <p className=" text-white font-normal text-sm flex border-b border-b-cs300 pb-1 mb-1">Qty <span className="ml-auto font-medium block">300</span></p>
            <p className=" text-white font-normal text-sm flex border-b border-b-cs300 pb-1 mb-1">Strike <span className="ml-auto font-medium block">175.95</span></p>
            <p className=" text-white font-normal text-sm flex mb-4">Performance <span className="ml-auto font-medium block text-cp300">+16.42%</span></p>
            <div className=" text-white bg-light-red font-semibold text-base text-center rounded-lg p-1 cursor-pointer">Exit</div>
         </div>
      </div>
   )
}

export default PositionCard