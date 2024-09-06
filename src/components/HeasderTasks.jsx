import React, { useRef, useState } from 'react'
import Header from './Header'
import AllTasks from './AllTasks'
import Footer from './Footer'

const HeasderTasks = () => {
  return (
    <div>  
      <Header/>
      <AllTasks/>
      <Footer/>
    </div>
  )
}

export default HeasderTasks
