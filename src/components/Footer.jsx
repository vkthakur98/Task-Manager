import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex justify-center align-middle p-4 font-sans'>
      <Link to="/create-task"><button className='bg-blue-500 p-3 text-white rounded-md font-sans font-bold w-80'>Add New Task</button></Link>
    </div>
  )
}

export default Footer
