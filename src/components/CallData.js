import CallCard from './CallCard'
import ExitedCard from './ExitedCard'

const CallData = () => {
   return (
      <div className='max-w-7xl mx-auto'>
         <div className='flex justify-between items-center mb-10'>
            <h2 className=' text-3xl font-semibold text-dark-green'>Call Data</h2>
            <select>
               <option value="">Total Calls</option>
               <option value="">Active Calls</option>
               <option value="">Performance</option>
            </select>
         </div>
         <div className='mb-10'>
            <h3 className='font-semibold text-xl text-dark-green '>Past Performance</h3>
            <span className=' block font-regular text-md text-dark-green mb-5'>How we proved possibles!</span>
            <div className=' bg-elight-green p-5 rounded-xl'>
               <h3 className='font-semibold text-xl text-dark-green mb-4 text-center'>Waya Metrics (April 2023 - September 2023)</h3>
               <div className='grid grid-cols-5 gap-4'>
                  <CallCard image="feather.svg" label="Total Calls" count="119"/>
                  <CallCard image="feather.svg" label="Exited Calls" count="105"/>
                  <CallCard image="feather.svg" label="Success Rate" count="86%"/>
                  <CallCard image="feather.svg" label="Avg. duration/call" count="25d"/>
                  <CallCard image="feather.svg" label="Annual Returns" count="106%"/>
               </div>
            </div>
         </div>

         <div className=' mb-10'>
            <h3 className='font-semibold text-xl text-dark-green mb-5'>Exited Calls</h3>
            <div className='grid grid-cols-3 gap-4'>
               <ExitedCard/>
               <ExitedCard/>
               <ExitedCard/>
            </div>
         </div>
      </div>
   )
}

export default CallData