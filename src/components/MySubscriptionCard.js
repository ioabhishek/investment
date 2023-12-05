import Image from "next/image"
import Link from "next/link"

const MySubscriptionCard = () => {
  return (
    <Link href="/" className='bg-cs200 rounded-xl min-w-[300px] max-w-[300px] md:min-w-full md:max-w-full'>
      <Image
        src="/dummy.webp"
        width={300}
        height={250}
        alt=""
        className=' aspect-video w-full h-auto object-cover rounded-t-xl'
      />
      <div className="p-4">
        <h2 className=" text-xl font-semibold mb-1">Daily Intraday & Stock Options Call</h2>
        <p className=" text-sm text-cs600 font-normal mb-6">By Mohit Agrawal, Finterest Capital</p>
        <p className=" text-sm text-light-red font-normal">Expiring on 23rd Dec 2023</p>
      </div>
      <div className=" flex justify-between items-center p-4 bg-cs300 rounded-b-xl">
        <p className=" text-base font-medium">Renew at ₹5,000</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </div>
    </Link>
  )
}

export default MySubscriptionCard