import MySubscriptionCard from "@/components/MySubscriptionCard"
import SubscriptionCard from "@/components/SubscriptionCard"

const page = () => {
  return (
    <div className="w-full p-3 md:p-0 mb-14 md:mb-14">
      <h3 className='font-semibold text-2xl md:text-3xl  text-white mb-5 md:mb-5'>My Subscriptions</h3>
      <div className='w-full flex md:grid grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10 overflow-x-scroll md:overflow-x-hidden'>
        <MySubscriptionCard/>
        <MySubscriptionCard/>
        <MySubscriptionCard/>
        <MySubscriptionCard/>
      </div>

      <div className="flex justify-between mb-5 md:mb-5">
        <h3 className='font-semibold text-2xl md:text-3xl text-white '>Get Subscriptions</h3>
        <div className=" w-fit bg-cs200 p-2 grid items-center grid-cols-2 gap-2 rounded-xl">
          <span className="block bg-cp500 text-cs200 px-3 py-1 text-md text-center font-medium rounded-lg cursor-pointer">Paid</span>
          <span className="block text-cp500 text-md text-center font-medium whitespace-nowrap  cursor-pointer">Free</span>
        </div>
      </div>
      <div className='w-full flex md:grid grid-cols-4 gap-3 md:gap-4 overflow-x-scroll md:overflow-x-hidden'>
        <SubscriptionCard/>
        <SubscriptionCard/>
        <SubscriptionCard/>
        <SubscriptionCard/>
        <SubscriptionCard/>
        <SubscriptionCard/>
        <SubscriptionCard/>
        <SubscriptionCard/>
      </div>
    </div>
  )
}

export default page