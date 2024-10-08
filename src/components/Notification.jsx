import React from 'react'

const Notification = (props) => {
  const display = props.show?"block":"hidden"
  const bgcolor = props.type==="success"?"bg-[#227B94]":"bg-[#C96868]"
  return (
      <div className={` ${display}  p-4 font-sans text-[15px] ${bgcolor} font-bold text-white animate-fade-up mt-[-100px] rounded-[30px]`}>
      {props.msg}
      </div>  
  )
}

export default Notification

