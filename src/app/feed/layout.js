import Sidebar from '@/components/Sidebar'
import React from 'react'

const FeedLayout = ({children}) => {
  return (
    <>
      {children}
      <Sidebar/>
    </>
  )
}

export default FeedLayout