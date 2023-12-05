import React from 'react'
import DashboardCard from './DashboardCard'

const Dashboard = () => {
   return (
      <div className='max-w-7xl mx-auto'>
         <h2 className=' text-3xl font-semibold text-dark-green mb-5 mt-10'>Call Data</h2>

         <div className=' grid grid-cols-3 gap-6 mb-10'>
            <DashboardCard number='4' label='Total calls'/>
            <DashboardCard number='2' label='Active calls'/>
            <DashboardCard number='100' label='Performance'/>
         </div>

         <h2 className=' text-3xl font-semibold text-dark-green mb-5'>What you want to do</h2>
         <div className=' grid grid-cols-4 gap-6 mb-10'>
            <DashboardCard image="feather.svg" label='Give a call'/>
            <DashboardCard image="feather.svg" label='Update a call'/>
            <DashboardCard image="feather.svg" label='Creat a poll'/>
            <DashboardCard image="feather.svg" label='Post an content'/>
            <DashboardCard image="feather.svg" label='Answers question'/>
            <DashboardCard image="feather.svg" label='Subscriptions'/>
            <DashboardCard image="feather.svg" label='Reports'/>
            <DashboardCard image="feather.svg" label='Market Data'/>
            <DashboardCard image="feather.svg" label='Configure Page'/>
            <DashboardCard image="feather.svg" label='Start Event'/>
            <DashboardCard image="feather.svg" label='Support'/>
         </div>
      </div>
   )
}

export default Dashboard