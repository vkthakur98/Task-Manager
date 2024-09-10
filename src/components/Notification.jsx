import React from 'react'

const Notification = (props) => {
  const display = props.show?"block":"hidden"
  return (
      <div className={` ${display} p-4 font-sans text-[15px] bg-[#2FB390] font-bold text-white animate-fade-up mt-[-100px] rounded-md`}>
      {props.msg}
      </div>  
  )
}

export default Notification

