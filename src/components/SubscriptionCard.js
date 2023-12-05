import Image from "next/image"
import Link from "next/link"

const SubscriptionCard = () => {
  return (
    <Link href="/" className='bg-cs200 rounded-xl min-w-[300px] max-w-[300px] md:min-w-full md:max-w-full'>
      <Image
        src="/membership.webp"
        width={300}
        height={250}
        alt=""
        className=' aspect-video w-full h-auto object-cover rounded-t-xl'
      />
      <div className="p-4">
        <h2 className=" text-xl font-semibold mb-1">Daily Intraday Calls</h2>
        <p className=" text-xs text-cs600 font-normal mb-2">By Mohit Agrawal, Finterest Capital</p>
        <div className=" text-xs font-normal max-w-fit flex items-center gap-2 bg-cs300 rounded-md pr-2" >
          <span className="flex items-center gap-1 text-cs100 text-xs font-medium  bg-cp500 rounded-md px-1 py-0 ">
              SEBI
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
          </span>
          INH000011954
        </div>
      </div>
      <div className=" flex justify-between items-center p-4 bg-cs300 rounded-b-xl">
        <p className=" text-base font-medium">Buy at ₹5,000</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </div>
    </Link>
  )
}

export default SubscriptionCard