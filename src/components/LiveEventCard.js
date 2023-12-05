import Image from "next/image";

const LiveEventCard = () => {
   return (
      <div className="bg-cs200 p-3 md:p-4 rounded-xl border border-cp500">
         <h2 className=" font-semibold text-base md:text-xl mb:0 md:mb-1">
            Webinar from Nikhil Kamath on Building a Midcap Portfolio
         </h2>
         <div className=" text-cp300 font-medium text-sm md:text-base mb-1">
            Sat, Nov 11 • 9:30 AM - 12:30PM<span className="text-cs600 ml-4">3h</span>
         </div>
         <div className="font-normal text-sm md:text-base flex items-center gap-1 mb-1">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="15"
               height="15"
               viewBox="0 0 24 24"
               fill="none"
               stroke="#908d93"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round">
               <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
               <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-cs600 font-medium">Google Meet</span>
            <span className="font-medium text-sm md:text-base ml-auto">Free</span>
         </div>
         <div className="flex items-center">
            <p className=" text-cs600 text-sm">999+ Participants Attending</p>
            <div className=" bg-cp500 text-cs100 text-base font-medium md:font-semibold px-4 py-1 md:px-6 md:py-2 ml-auto rounded-lg md:rounded-xl cursor-pointer">
               Join Now
            </div>
         </div>
      </div>
   );
};

export default LiveEventCard;
