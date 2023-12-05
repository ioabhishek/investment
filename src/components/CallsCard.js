import Image from 'next/image'
import Link from 'next/link'
   
const CallsCard = ({image, label, count}) => {
   return (
      <Link href="/calls/alskdjfn" className=' bg-cs200 rounded-lg flex flex-col items-center justify-center px-2 md:px-3 py-4 md:py-8'>
         <div className=' w-10 h-10 md:w-12 md:h-12 flex items-center justify-center  rounded-lg bg-cp500 aspect-square mb-2 md:mb-4'>
            <Image
               src="/feather.svg"
               width={20}
               height={20}
               alt=""
            />
         </div>
         <span className='block rounded-md text-xs md:text-sm text-center md:text-md font-medium text-white mb-1'>{label}</span>
      </Link>
   )
}

export default CallsCard