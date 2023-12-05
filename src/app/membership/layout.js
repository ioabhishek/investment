import SubscriptionCard from "@/components/SubscriptionCard"

const MembershipLayout = ({children}) => {
  return (
    <div className="w-full block md:grid p-3 lg:p-0 mb-14 md:mb-14">
      {children}
      {/* More */}
      <div className="">
        <h3 className='font-semibold text-2xl md:text-3xl  text-white mb-5 md:mb-5'>More from Manish Thakkar</h3>
        <div className='w-full flex md:grid grid-cols-4 gap-3 md:gap-4 overflow-x-scroll md:overflow-x-hidden'>
          <SubscriptionCard/>
          <SubscriptionCard/>
          <SubscriptionCard/>
          <SubscriptionCard/>
        </div>
      </div>
    </div>
  )
}

export default MembershipLayout