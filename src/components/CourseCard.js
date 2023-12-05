import Image from "next/image"
import Link from "next/link"

const CourseCard = () => {
  return (
    <Link href="/" className='min-w-[300px] max-w-[300px] bg-cs200 rounded-xl'>
      <Image
        src="/membership.webp"
        width={300}
        height={250}
        alt=""
        className=' aspect-video w-full h-auto object-cover rounded-t-xl'
      />
      <div className="p-4">
        <h2 className=" text-xl font-semibold mb-1">Options & Stocks Scalping Masterclass</h2>
        <p className=" text-xs text-cs600 font-normal mb-2">By Mohit Agrawal, Finterest Capital</p>
      </div>
      <div className=" flex justify-between items-center p-4 bg-cs300 rounded-b-xl">
        <p className=" text-base font-medium">Buy at ₹4,999</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </div>
    </Link>
  )
}

export default CourseCard