import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
function Layout({children, wallet}) {
  return (
  <div>
      <Navbar wallet={wallet} />
      <div className="flex">
        <Sidebar />
        <div className='w-full'>
          {children}
        </div>
      </div>
  </div>
  )
}

export default Layout