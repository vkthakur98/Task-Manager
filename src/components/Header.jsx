import React from 'react'
import Banner from './Banner'


const Header = () => {
  return (
    <>
    <div className='p-4 flex justify-between align-middle text-[20px]'>
        <i className="fa-solid fa-bars bg-[#262626] flex justify-center align-middle p-3 rounded-md text-gray-500"></i>
        <h2 className='font-bold text-white'>Task Manager</h2>
        <i className="fa-regular fa-bell bg-[#262626] flex justify-center align-middle p-3 rounded-md text-gray-500"></i>
    </div>
    <Banner></Banner>
    </>
  )
}

export default Header
